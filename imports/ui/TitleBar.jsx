import React from 'react';
import { Link } from 'react-router-dom';

export default TitleBar = ({ children }) => {
  return (
    <nav className="TitleBar navbar bg-secondary text-dark border-bottom">
      <Link to="/" className="btn">
        <h1 className="serif font-weight-light">IDW</h1>
      </Link>
      {children}
    </nav>
  );
}
