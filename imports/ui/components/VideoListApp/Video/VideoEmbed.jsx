import React from 'react';

import LoadingIcon from '../../LoadingIcon';

export default VideoEmbed = ({ _id }) => {
  const url = `https://youtube.com/embed/${_id}?autoplay=1`;
  return (
    <div className="VideoEmbed">
  
      <div className="VideoEmbed__loading">
        <LoadingIcon />
      </div>
  
      <iframe
        className="VideoEmbed__iframe"
        src={url}
        frameBorder="0"
        allowFullScreen
        allow={"accelerometer; autoplay; encrypted-media; "
          + "gyroscope; picture-in-picture"}
      />

    </div>
  );
}
  