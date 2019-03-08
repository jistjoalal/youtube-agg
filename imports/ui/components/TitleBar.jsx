import React from 'react';
import { Link } from 'react-router-dom';

const GH = 'github';

const TitleLinks = ({ title }) =>
  title == "IDW" ?
    <div>
      <Link className="btn btn-secondary" to="/channels">
        All Channels
      </Link>
      <a target="blank"
        className="text-monospace btn btn-secondary ml-2"
        href="https://github.com/jistjoalal/youtube-agg"
      >
        { GH }
      </a>
    </div>
  : <div>
      <Link className="btn btn-secondary" to="/">
        Home
      </Link>
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
