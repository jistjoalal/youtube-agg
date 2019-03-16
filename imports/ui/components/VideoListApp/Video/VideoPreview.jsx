import React from 'react';
import { FaYoutube } from 'react-icons/fa';

import VideoDescription from './VideoDescription';

export default VideoPreview = ({ video, open }) =>
  <div className="VideoPreview">
  
    <a href="" onClick={e => { e.preventDefault(); open(); }}>

      <div className="VideoPreview__play">

        <FaYoutube className="VideoPreview__playButton" />

      </div>
      
      <img src={video.img} className="VideoPreview__thumb" />
      
    </a>

    <VideoDescription video={video} /> 
      
  </div>
