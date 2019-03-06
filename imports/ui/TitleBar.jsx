import React from 'react';
import { Link } from 'react-router-dom';

export default TitleBar = ({ children, title }) => {
  const isChannel = title !== "IDW";
  return (
    <nav className="TitleBar navbar bg-secondary text-dark border-bottom">
      {isChannel &&
        <Link to="/" className="btn btn-dark">
          Home
        </Link>
      }
      <h1 className="serif font-weight-light">{title}</h1>
      {children}
    </nav>
  );
}
