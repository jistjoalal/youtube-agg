import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  FaHourglassHalf,
  FaRegEye,
  FaFire,
  FaCloudUploadAlt
} from 'react-icons/fa';

import { commaNum } from '../../helpers';

export default VideoDescription = ({ video }) => {
  
  // render db-data for display
  const postedAgo = moment(video.postedTime).fromNow();
  const views = commaNum(video.viewCount) + ' views';
  const duration = moment.duration(video.duration, 'seconds').humanize();
  const url = `https://youtube.com/watch?v=${video._id}`;
  const vps = (video.viewsPerSec || 0).toFixed(2) + ' v/s';
  
  return (
    <div className="VideoDescription">

      <a href={url} target="_blank" rel="noopener">
        <h4>
          {video.title}
        </h4>
      </a>

      <Link to={`/channel/${video.channelId}/`}>
        <h5 className="text-muted">
          {video.channelTitle}
        </h5>
      </Link>
      
      <div className="VideoDescription__text">
        <div>
          <FaCloudUploadAlt /> {postedAgo}
        </div>
        <div>
          <FaFire /> ({vps})
        </div>
        <div>
          <FaHourglassHalf /> {duration}
        </div>
        <div>
          <FaRegEye /> {views}
        </div>
      </div>
      
    </div>
  );
}
