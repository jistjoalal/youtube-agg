import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const commaNum = n => n < 1000 ? n
  : commaNum(~~(n / 1000)) + ','
  + (n % 1000 + '').padStart(3, '0');

export default VideoDescription = ({ video }) => {
  const postedAgo = moment(video.postedTime).fromNow();
  const views = commaNum(video.viewCount) + ' views';
  const duration = moment.duration(video.duration, 'seconds').humanize();
  const url = `https://youtube.com/watch?v=${video._id}`;
  const vps = video.viewsPerSec.toFixed(2) + ' v/s';
  return (
    <div className="d-flex flex-column justify-content-center p-1">
      <a href={url} target="blank">
        <h4>{video.title}</h4>
      </a>
      <Link to={`/channel/${video.channelId}`}>
        <h5 className="text-muted">{video.channelTitle}</h5>
      </Link>
      <span className="text-muted">
        {duration} - {views} ({vps}) - {postedAgo}
      </span>
    </div>
  );
}
