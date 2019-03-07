import React from 'react';

const GH = 'github';

export default TitleBar = ({ children, title }) =>
  <nav className="TitleBar navbar bg-secondary text-dark border-bottom d-flex flex-column">

    <div className="d-flex justify-content-between align-items-center border-bottom mb-2 w-100">

        {/* perfectly balanced... */}
        <a className="invisible">
          { GH }
        </a>

        <h1 className="serif font-weight-bold m-0">{title}</h1>
        
        <a target="blank"
          className="text-monospace text-light"
          href="https://github.com/jistjoalal/youtube-agg"
        >
          { GH }
        </a>
    </div>
   
    <div className="d-flex justify-content-center w-100">
      {children}
    </div>
  </nav>
