import React from 'react';

import VideoDescription from './VideoDescription';

export default VideoPreview = ({ video, open }) =>
  <div className="VideoPreview">
  
    <a href="" onClick={e => { e.preventDefault(); open(); }}>
      <img src={video.img} className="VideoPreview__thumb" />
    </a>

    <VideoDescription video={video} /> 
      
  </div>
