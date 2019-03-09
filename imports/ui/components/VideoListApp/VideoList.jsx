import React from 'react';

import VideoListTracker from '../../trackers/VideoListTracker';

import FlipMoveList from '../FlipMoveList';
import Video from './Video';

const VideoList = ({ loading, videos }) =>
  <div className="container bg-dark shadow">

    <FlipMoveList>
      {videos.map(video =>
        <Video key={video._id} video={video} /> 
      )}
    </FlipMoveList>

    {loading &&
      <p className="alert alert-dark shadow m-3">
        Loading...
      </p>
    }

  </div>

export default VideoListTracker(VideoList);
