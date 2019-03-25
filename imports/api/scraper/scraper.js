import fetch from 'node-fetch';

import Videos from '../videos';
import Channels from '../channels';
import { parseVideos, parseChannel } from './parser';
import CHANNEL_IDS from './channelIds';


// Scrapes all channels
export default scrape = _ => CHANNEL_IDS.forEach(scrapeChannel);

// parse a youtube channel's 'videos' page
// save scraped data to db
const scrapeChannel = _id => {
  const reqUrl = `https://www.youtube.com/channel/${_id}/videos`;
  fetch(reqUrl)
    .then(res => res.text())
    .then(parseAndUpdate)
    .catch(err => console.log(err))
}

const parseAndUpdate = html => {
  // channel
  const channel = parseChannel(html);
  updateChannel(channel);
  // videos
  parseVideos(html, channel).forEach(updateVideo);
}

// submit results of scraping to Channels collection
const updateChannel = channel => {
  const q = { _id: channel._id };
  if (Channels.findOne(q)) {
    return Channels.update(q, channel);
  }
  return Channels.insert(channel);
}

// submit results of scraping to Videos collection
const updateVideo = vid => {
  if (!vid) return;

  const q = { _id: vid._id };
  const cur = Videos.findOne(q);

  // video is not new
  if (cur) {
    // don't overwrite postedTime
    // since it's a weird reverse timeago calculation
    // it's more accurate the less it's updated
    vid.postedTime = cur.postedTime;
    
    vid.viewsPerSec = viewsPerSec(vid)
    return Videos.update(q, vid);
  }

  // video is new
  else {
    vid.viewsPerSec = viewsPerSec(vid);
    return Videos.insert(vid);
  }
}

/**
 * Calculate views per second
 * - Must be run outside parser
 * - calculation depends on accurate postedTime which we do not reparse
 * - (see updateVideo)
 */
const viewsPerSec = ({ postedTime, viewCount }) => {
  const deltaTime = (Date.now() - postedTime) / 1000;
  return viewCount / deltaTime;
}

