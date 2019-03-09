import React from 'react';

import VideoEmbed from './VideoEmbed';
import VideoDescription from './VideoDescription';

export default VideoPlayer = ({ video, close }) =>
  <>
    <div className="d-flex justify-content-center align-items-start w-100">
      <VideoEmbed _id={video._id} />
      <button className="btn btn-outline-danger ml-3 p-1"
        onClick={close}>&times;</button>
    </div>
    <div className="mx-4">
      <VideoDescription video={video} />
    </div>
  </>
