import React from 'react';
import { Link } from 'react-router-dom';

export default ChannelLink = ({ _id, title, avatar }) =>
  <div className="row border-bottom align-items-center">
    <img src={avatar} />
    <Link className="h3 ml-2" to={`channel/${_id}`}>
      {title}
    </Link>
  </div>
  