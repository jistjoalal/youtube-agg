import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import ChannelLink from './ChannelLink';
import TitleBar from '../TitleBar';

export default ChannelList = ({ channels }) =>
  <div>

    <Helmet>
      <title>IDW Channels</title>
    </Helmet>

    <TitleBar title="IDW Channels">
    
      <div>

        <span className="mr-2">
          Someone missing?
        </span>
        
        <Link className="button" to="/request-channel">
          Request a channel
        </Link>

      </div>
      
    </TitleBar>

    <div className="section">
      {renderChannels(channels)}
    </div>
    
  </div>

const renderChannels = (channels) =>
  channels.map(channel =>
    <ChannelLink key={channel._id} {...channel} />
  )
