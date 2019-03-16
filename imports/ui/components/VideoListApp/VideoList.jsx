import React from 'react';

import VideoListTracker from '../../trackers/VideoListTracker';

import Video from './Video';

const VideoList = ({ loading, videos }) =>
  <div className="Section container bg-dark shadow">

      {videos.map(video =>
        <Video key={video._id} video={video} /> 
      )}

    {loading &&
      <p className="alert alert-dark shadow m-3">
        Loading...
      </p>
    }

  </div>

export default VideoListTracker(VideoList);
