import React from 'react';

import App from './App';

export default Channel = ({ channel, loading }) => {
  const props = loading ? {} : {
    query: { channelId: channel._id },
    title: channel.title,
  }
  return (
    <div>
      <App {...props} />
    </div>
  );
}
