import axios from 'axios';

import Videos from '../videos';
import Channels from '../channels';
import { parseVideos, parseChannel } from './parser';
import CHANNEL_IDS from './channelIds';

export default scrape = _ => {
  CHANNEL_IDS.forEach(scrapeChannel);
}

export const scrapeChannel = _id => {
  const reqUrl = `https://www.youtube.com/channel/${_id}/videos`;
  axios(reqUrl)
    .then(({ data }) => {

      const channel = parseChannel(data);
      updateChannel(channel);

      parseVideos(data, channel).forEach(updateVideo);
      
    })
    .catch(err => console.log(err))
}

const updateChannel = channel => {
  const q = { _id: channel._id };
  if (Channels.findOne(q)) {
    return Channels.update(q, channel);
  }
  return Channels.insert(channel);
}

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

    // track updates
    vid.updateCount++;

    // track view growth
    const deltaViews = vid.viewCount - cur.viewCount;
    const deltaTime = vid.updatedAt - cur.updatedAt;
    const viewGrowth = deltaViews / deltaTime;
    // average old w/ new
    vid.viewGrowth = (viewGrowth + cur.viewGrowth) / 2;

    return Videos.update(q, vid);
  }

  // video is new
  else {
    return Videos.insert(vid);
  }
}
