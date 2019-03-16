import React from 'react';
import { Link } from 'react-router-dom';

export default ChannelLink = ({ _id, title, avatar }) =>
  <div className="ChannelLink">
  
    <img src={avatar} height="100" width="100" />
    
    <Link className="h3 ml-2" to={`channel/${_id}/`}>
      {title}
    </Link>
    
  </div>
