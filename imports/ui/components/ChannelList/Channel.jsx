import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';

export default Channel = ({ _id, title, avatar }) => {
  const url = 'https://youtube.com/channel/' + _id;
  return (
    <div className="Channel">
    
      <img src={avatar} height="100" width="100" />
      
      <div className="Channel__info">
        
        <Link className="h3" to={`channel/${_id}/`}>
          {title}
        </Link>
  
        <a className="button-red" href={url}>
          <FaYoutube /> Youtube
        </a>

      </div>
      
    </div>
  );
}