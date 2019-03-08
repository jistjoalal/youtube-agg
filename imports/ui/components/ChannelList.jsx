import React from 'react';

import TitleBar from '../components/TitleBar';
import ChannelLink from '../components/ChannelLink';

export default ChannelList = ({ channels }) =>
  <div>

    <TitleBar title="IDW Channels"></TitleBar>

    <div className="container bg-dark">
      {channels.map(channel =>
        <ChannelLink key={channel._id} {...channel} />
      )}
    </div>
    
  </div>
