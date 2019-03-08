import React from 'react';

import TitleBar from '../components/TitleBar';
import ChannelLink from '../components/ChannelLink';

export default ChannelList = ({ channels }) =>
  <div>

    <TitleBar title="IDW Channels"></TitleBar>

    <div className="container">
      {channels.map(props =>
        <ChannelLink key={props.id} {...props} />
      )}
    </div>
    
  </div>
