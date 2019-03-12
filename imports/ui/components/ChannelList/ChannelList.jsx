import React from 'react';
import { Link } from 'react-router-dom';

import ChannelLink from './ChannelLink';
import TitleBar from '../TitleBar';
import FlipMoveList from '../FlipMoveList';

export default ChannelList = ({ channels }) =>
  <div>

    <TitleBar title="IDW Channels">
      <div>
        <span className="mr-2">
          Someone missing?
        </span>
        <Link className="btn btn-dark" to="/request-channel">
          Request a channel
        </Link>
      </div>
    </TitleBar>

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
