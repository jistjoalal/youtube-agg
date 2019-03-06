import axios from 'axios';
import $ from 'cheerio';
import tr from 'timeago-reverse';

import Videos from './videos';
import { CHANNEL_IDS } from './channels';

export default scrapeIfEmpty = _ => {
  if (!Videos.find().fetch().length) {
    CHANNEL_IDS.forEach(scrapeChannel);
  }
}


const scrapeChannel = ({ id, title })=> {
  console.log(`scraping ${title}...`)

  const reqUrl = `https://www.youtube.com/channel/${id}/videos`;
  axios(reqUrl)
    .then(res => {
      // parse and insert hits into db
      const t = vidHits(res.data).map(v => parseVid(v, id, title));
      t.forEach(insertIfNew);
      console.log(`found ${t.length} ${title} videos`);
    })
    .catch(err => console.log(err))
}

const parseVid = (vidHtml, channelId, channelTitle) => {

  // Filter out Live Streams - don't have duration
  const isLive = !$('.video-time > span', vidHtml).length;
  if (isLive) return null;

  // helpers
  const parseAttr = (target, attr) => $(target, vidHtml)[0].attribs[attr];
  const parseChildText = (target, childIdx) => $(target, vidHtml)[childIdx].children[0].data; 

  // parse time ago string as unix
  const postedAgo = parseChildText('.yt-lockup-meta-info > li', 1);
  const postedTime = tr.parse(postedAgo).getTime();

  // strip video id + make url
  const href = parseAttr('.spf-link > .yt-uix-sessionlink', 'href');
  const videoId = href.split('=')[1];
  const url = 'https://youtube.com' + href;

  // parse viewCount as int
  const viewCount = parseChildText('.yt-lockup-meta-info > li', 0); 
  const viewInt = +viewCount.replace(/,/g, '').split(' ')[0];

  // parse duration as seconds
  const duration = parseAttr('.video-time > span', 'aria-label'); 
  const durInSec = parseDuration(duration);

  return {
    channelId, channelTitle,

    postedAgo, postedTime,
    
    viewCount, viewInt,

    url, videoId,

    duration, durInSec,

    img : parseAttr('.yt-thumb-clip > img', 'src'),

    title : parseAttr('.yt-lockup-title > a', 'title'),
  }; 
}

const parseDuration = duration => {
  const sec = parseTimeUnit(duration, 'sec');
  const min = parseTimeUnit(duration, 'min');
  const hr = parseTimeUnit(duration, 'hou');
  return sec + 60 * min + 3600 * hr;
}

const parseTimeUnit = (t, u) => {
  const parse = t.match(new RegExp(`\\d+\\s${u}`));
  return parse ? +parse[0].split(' ')[0] : 0;
}

const vidHits = html => {
  return $('.yt-lockup-video', html).map((_, e) => $(e).html()).toArray();
}

const insertIfNew = vid => {
  if (vid && !Videos.findOne(vid)) {
    Videos.insert(vid);
  }
}
