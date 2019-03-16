import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

import VideoEmbed from './VideoEmbed';
import VideoDescription from './VideoDescription';

export default VideoPlayer = ({ video, close }) =>
  <>
    <div className="VideoPlayer">
      <button
        className="VideoPlayer__close"
        data-toggle="tooltip"
        title="Close"
        onClick={close}
      >
        <FaWindowClose />
      </button>
      <VideoEmbed _id={video._id} />
    </div>
    <VideoDescription video={video} />
  </>
