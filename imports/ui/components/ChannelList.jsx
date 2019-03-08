import React from 'react';

import TitleBar from '../components/TitleBar';
import ChannelLink from '../components/ChannelLink';
import FlipMoveList from '../components/FlipMoveList';

export default ChannelList = ({ channels }) =>
  <div>

    <TitleBar title="IDW Channels"></TitleBar>

    <div className="container bg-dark">
      <FlipMoveList>
        {renderChannels(channels)}
      </FlipMoveList>
    </div>
    
  </div>

const renderChannels = (channels) =>
  channels.map(channel =>
    <ChannelLink key={channel._id} {...channel} />
  )
