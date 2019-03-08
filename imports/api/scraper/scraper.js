import axios from 'axios';

import Videos from '../videos';
import Channels from '../channels';
import { parseVideos, parseChannel } from './parser';
import { CHANNEL_IDS } from './channels';

export default scrape = _ => {
  CHANNEL_IDS.forEach(scrapeChannel);
}

const scrapeChannel = ({ id, title }) => {
  const reqUrl = `https://www.youtube.com/channel/${id}/videos`;
  axios(reqUrl)
    .then(({ data }) => {

      updateChannel(parseChannel(data, id, title));

      parseVideos(data, id, title).forEach(updateVideo);
      
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
