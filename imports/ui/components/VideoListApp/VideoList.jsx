import React from 'react';

import VideoListTracker from '../../trackers/VideoListTracker';

import Video from './Video';

const VideoList = ({ loading, videos }) =>
  <div className="VideoList">

      {videos.map(video =>
        <Video key={video._id} video={video} /> 
      )}

    {loading &&
      <p className="alert-box">
        Loading...
      </p>
    }

  </div>

export default VideoListTracker(VideoList);
