import React from 'react';

export default VideoDescription = ({ video }) => {
  return (
    <>
      <a href={video.url} >
        <h4>{video.title}</h4>
      </a>
      <h5 className="text-muted">{video.channelTitle}</h5>
      <span className="text-muted">
        {video.duration} - {video.viewCount} - {video.postedAgo}
      </span>
    </>
  );
}
