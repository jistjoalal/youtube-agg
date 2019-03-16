import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Channel from './Channel';
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
      {channels.map(channel =>
        <Channel key={channel._id} {...channel} />
      )}
    </div>
    
  </div>
