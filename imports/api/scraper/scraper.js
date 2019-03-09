import axios from 'axios';

import Videos from '../videos';
import Channels from '../channels';
import { parseVideos, parseChannel } from './parser';
import CHANNEL_IDS from './channelIds';

export default scrape = _ => {
  CHANNEL_IDS.forEach(scrapeChannel);
}

const scrapeChannel = _id => {
  const reqUrl = `https://www.youtube.com/channel/${_id}/videos`;
  axios(reqUrl)
    .then(({ data }) => {

      const channel = parseChannel(data, _id);
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
  if (Videos.findOne(q)) {
    return Videos.update(q, vid);
  }
  return Videos.insert(vid);
}
