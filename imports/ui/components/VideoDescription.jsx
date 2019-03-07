import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default VideoDescription = ({ video }) => {
  const postedAgo = moment(video.postedTime).fromNow();
  return (
    <>
      <a href={video.url} target="blank">
        <h4>{video.title}</h4>
      </a>
      <Link to={`/channel/${video.channelId}`}>
        <h5 className="text-muted">{video.channelTitle}</h5>
      </Link>
      <span className="text-muted">
        {video.duration} - {video.viewCount} - {postedAgo}
      </span>
    </>
  );
}
