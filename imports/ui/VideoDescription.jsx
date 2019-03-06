import React from 'react';
import { Link } from 'react-router-dom';

export default VideoDescription = ({ video }) => {
  return (
    <>
      <a href={video.url} target="blank">
        <h4>{video.title}</h4>
      </a>
      <Link to={`/channel/${video.channelId}`}>
        <h5 className="text-muted">{video.channelTitle}</h5>
      </Link>
      <span className="text-muted">
        {video.duration} - {video.viewCount} - {video.postedAgo}
      </span>
    </>
  );
}
