import React from 'react';
import { Link } from 'react-router-dom';

const GH = 'github';

const TitleLink = ({ title }) =>
  title == "IDW" ?
    <Link className="btn btn-secondary" to="/channels">
      All Channels
    </Link>
  : <Link className="btn btn-secondary" to="/">
      Home
    </Link>

export default TitleBar = ({ children, title }) =>
  <nav className="TitleBar navbar bg-secondary text-dark border-bottom d-flex flex-column">

    <div className="d-flex justify-content-between align-items-center border-bottom mb-2 w-100">

        <h1 className="serif font-weight-bold m-0">{title}</h1>

        <div>
          <TitleLink title={title} />
          
          <a target="blank"
            className="text-monospace btn btn-secondary ml-2"
            href="https://github.com/jistjoalal/youtube-agg"
          >
            { GH }
          </a>

        </div>
        
    </div>
   
    {children &&
      <div className="d-flex justify-content-center w-100">
        {children}
      </div>
    }
  </nav>
