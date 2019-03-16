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
    
      <Link className="button-dark" to="/request-channel">
        Request a Channel
      </Link>
      
    </TitleBar>

    <div className="section">
      {channels.map(channel =>
        <Channel key={channel._id} {...channel} />
      )}
    </div>
    
  </div>
