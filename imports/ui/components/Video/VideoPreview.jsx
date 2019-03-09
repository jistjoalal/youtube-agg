import React from 'react';

import VideoDescription from './VideoDescription';

export default VideoPreview = ({ video, open }) =>
  <>
    <div className="col-4">
      <a className="btn" href="" onClick={e => { e.preventDefault(); open(); }}>
        <img src={video.img} height="100" />
      </a>
    </div> 
    <div className="col-8 d-flex flex-column justify-content-center">
      <VideoDescription video={video} /> 
    </div>
  </>
