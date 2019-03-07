import axios from 'axios';

import Videos from '../videos';
import parseVideos from './parser';
import { CHANNEL_IDS } from './channels';

export default scrape = _ => {
  CHANNEL_IDS.forEach(scrapeChannel);
}

const scrapeChannel = ({ id, title }) => {
  const reqUrl = `https://www.youtube.com/channel/${id}/videos`;
  axios(reqUrl)
    .then(({ data }) => {
      parseVideos(data, id, title)
      .forEach(updateVideo);
    })
    .catch(err => console.log(err))
}


const updateVideo = vid => {
  if (!vid) return;
  const q = { _id: vid._id };
  if (Videos.findOne(q)) {
    return Videos.update(q, vid);
  }
  return Videos.insert(vid);
}
