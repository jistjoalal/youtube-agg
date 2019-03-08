import React from 'react';
import { Link } from 'react-router-dom';

export default ChannelLink = ({ title, id }) =>
  <div className="row border-bottom">
    <Link className="h3" to={`channel/${id}`}>
      {title}
    </Link>
  </div>
  