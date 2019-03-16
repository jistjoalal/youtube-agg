import React from 'react';

import LoadingIcon from '../../LoadingIcon';

export default VideoEmbed = ({ _id }) =>
  <div className="VideoEmbed">

    <div className="VideoEmbed__loading">
      <LoadingIcon />
    </div>

    <iframe
      className="VideoEmbed__iframe"
      src={`https://www.youtube.com/embed/${_id}?autoplay=1`}
      frameBorder="0"
      allowFullScreen
      allow={"accelerometer; autoplay; encrypted-media; "
        + "gyroscope; picture-in-picture"}
    >
    </iframe>
  </div>
 