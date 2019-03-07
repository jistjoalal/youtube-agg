import React from 'react';
import { Link } from 'react-router-dom';

export default TitleBar = ({ children, title }) =>
  <nav className="TitleBar navbar bg-secondary text-dark border-bottom">
    {title !== "IDW" &&
      <Link to="/" className="btn btn-dark">
        Home
      </Link>
    }
    <h1 className="serif font-weight-light m-0">{title}</h1>
    {children}
  </nav>
