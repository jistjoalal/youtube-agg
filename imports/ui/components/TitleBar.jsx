import React from 'react';

import TitleLinks from './TitleLinks';

export default TitleBar = ({ children, title }) =>
  <nav className="navbar bg-secondary text-dark shadow">

    <h1 className="serif">{title}</h1>

    {children &&
      <div className="d-flex justify-content-center">
        {children}
      </div>
    }

    <TitleLinks title={title} />

  </nav>
