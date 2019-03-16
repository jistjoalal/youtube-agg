import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

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

      <a href={url} target="blank">
        <h4>
          {video.title}
        </h4>
      </a>

      <Link to={`/channel/${video.channelId}/`}>
        <h5 className="text-muted">
          {video.channelTitle}
        </h5>
      </Link>
      
      <span className="text-muted">
        {duration} - {views} ({vps}) - {postedAgo}
      </span>
      
    </div>
  );
}
