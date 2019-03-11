import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

import VideoEmbed from './VideoEmbed';
import VideoDescription from './VideoDescription';

export default VideoPlayer = ({ video, close }) =>
  <>
    <div className="w-100 d-flex flex-column align-items-center">
      <button
        className="btn btn-dark text-danger align-self-end"
        data-toggle="tooltip"
        title="Close"
        onClick={close}
      >
        <FaWindowClose />
      </button>
      <VideoEmbed _id={video._id} />
    </div>
    <div className="mx-4">
      <VideoDescription video={video} />
    </div>
  </>
