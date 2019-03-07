import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const commaNum = n => n < 1000 ? n
  : commaNum(~~(n / 1000)) + ',' + n % 1000;

export default VideoDescription = ({ video }) => {
  const postedAgo = moment(video.postedTime).fromNow();
  const views = commaNum(video.viewCount) + ' views';
  const duration = moment.duration(video.duration, 'seconds').humanize();
  return (
    <>
      <a href={video.url} target="blank">
        <h4>{video.title}</h4>
      </a>
      <Link to={`/channel/${video.channelId}`}>
        <h5 className="text-muted">{video.channelTitle}</h5>
      </Link>
      <span className="text-muted">
        {duration} - {views} - {postedAgo}
      </span>
    </>
  );
}
