import React from 'react';
import { Link } from 'react-router-dom';

const TitleLinks = ({ title }) =>
  <div>
    {title != "IDW" &&
      <Link className="btn btn-secondary" to="/">
        Home
      </Link>
    }
    {title != "IDW Channels" &&
      <Link className="btn btn-secondary" to="/channels">
        All Channels
      </Link>
    }
    {title != "About" &&
      <Link className="btn btn-secondary" to="/about">
        About
      </Link>
    }
  </div>
  
export default TitleBar = ({ children, title }) =>
  <nav className="TitleBar navbar bg-secondary text-dark border-bottom d-flex flex-column">

    <div className="d-flex justify-content-between align-items-center border-bottom mb-2 w-100">

        <h1 className="serif font-weight-bold m-0">{title}</h1>

        <TitleLinks title={title} />

    </div>
   
    {children &&
      <div className="d-flex justify-content-center w-100">
        {children}
      </div>
    }
  </nav>
