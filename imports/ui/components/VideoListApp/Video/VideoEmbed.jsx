import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingIcon = _ =>
  <FaSpinner className="LoadingIcon" />

export default VideoEmbed = ({ _id }) =>
  <div className="VideoEmbed shadow">

    <div className="VideoEmbed__loading">
      <LoadingIcon />
    </div>

    <iframe
      className="VideoEmbed__iframe"
      src={`https://www.youtube.com/embed/${_id}?autoplay=1`}
      frameBorder="0" allowFullScreen
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
    </iframe>
  </div>
 