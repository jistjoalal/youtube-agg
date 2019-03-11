import React from 'react';

export default VideoEmbed = ({ _id }) =>
  <div className="VideoEmbed shadow">
    <iframe
      className="VideoEmbed__iframe"
      src={`https://www.youtube.com/embed/${_id}?autoplay=1`}
      frameBorder="0" allowFullScreen
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
    </iframe>
  </div>
 