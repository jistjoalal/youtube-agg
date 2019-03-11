import React from 'react';

import ChannelLink from './ChannelLink';
import TitleBar from '../TitleBar';
import FlipMoveList from '../FlipMoveList';

export default ChannelList = ({ channels }) =>
  <div>

    <TitleBar title="IDW Channels"></TitleBar>

    <div className="Section container bg-dark">
      <FlipMoveList>
        {renderChannels(channels)}
      </FlipMoveList>
    </div>
    
  </div>

const renderChannels = (channels) =>
  channels.map(channel =>
    <ChannelLink key={channel._id} {...channel} />
  )
