import tr from 'timeago-reverse';
import $ from 'cheerio';

/**
 * High-level
 * - object parsing
 */

// returns channel object
export const parseChannel = html => {
  const _id = parseAttr(html, '.yt-uix-subscription-button', 'data-channel-external-id');
  const title = parseAttr(html, '.appbar-nav-avatar', 'title');
  const avatar = parseAttr(html, '.appbar-nav-avatar', 'src');
  return {
    _id,
    title,
    avatar,
  };
}

// returns array of parsed (object) videos
// channel data is the same for all videos found in response
// so it is passed thru
export const parseVideos = (html, channel) =>
  vidHits(html).map(v => parseVid(v, channel));

// returns array of parsable HTML objects
export const vidHits = html => {
  return $('.yt-lockup-video', html)
    .map((_, e) => $(e).html())
    .toArray();
}

// returns video object w/ data parsed from HTML
export const parseVid = (html, channel) => {

  // ignore non-videos
  if (isNotVideo(html)) return null;

  return {
    channelId: channel._id,
    channelTitle: channel.title,
    ...parseBasic(html),
    _id: parseId(html),
    viewCount : parseViewCount(html),
    duration : parseDuration(html),
    postedTime : parsePostedTime(html),
  }; 
}

/**
 * Mid-level
 * - data parsing
 */

// Filter out:
//  - Live Streams - don't have duration
//  - Reminders - have unique element
const isNotVideo = html => {
  const timeSpan = $('.video-time > span', html);
  const reminder = $('.yt-uix-livereminder', html);
  return !timeSpan.length || reminder.length;
}

// ez parse
const parseBasic = html => {
  const img = parseAttr(html, '.yt-thumb-clip > img', 'src');
  const title = parseAttr(html, '.yt-lockup-title > a', 'title');
  return { img, title };
}

// strip video id + make url
const parseId = html => {
  const href = parseAttr(html, '.spf-link > .yt-uix-sessionlink', 'href');
  const _id = href.split('=')[1];
  return _id;
}

// parse time ago string as unix
const parsePostedTime = html => {
  const postedAgo = parseChildText(html, '.yt-lockup-meta-info > li', 1);
  return tr.parse(postedAgo).getTime();
}

// parse viewCount as int
const parseViewCount = html => {
  const viewCount = parseChildText(html, '.yt-lockup-meta-info > li', 0); 
  return +(viewCount.replace(/,/g, '').split(' ')[0]);
}

// returns seconds (int) from duration string
const parseDuration = html => {
  const duration = parseAttr(html, '.video-time > span', 'aria-label');
  const sec = parseTimeUnit(duration, 'sec');
  const min = parseTimeUnit(duration, 'min');
  const hr = parseTimeUnit(duration, 'hou');
  return sec + 60 * min + 3600 * hr;
}

/**
 * Low-level
 * - html parsing
 */

// returns int part of time string (s) matching unit (u)
export const parseTimeUnit = (s, u) => {
  const parse = s.match(new RegExp(`\\d+\\s${u}`));
  return parse ? +parse[0].split(' ')[0] : 0;
}

export const parseAttr = (html, target, attr) => {
  return $(target, html)[0].attribs[attr];
}

export const parseChildText = (html, target, childIdx) => {
  if (!$(target, html)[childIdx]) {
    throw new Meteor.Error(`Can't parse:\n${html}\n^ Couldn't parse`)
  }
  return $(target, html)[childIdx].children[0].data;
}
