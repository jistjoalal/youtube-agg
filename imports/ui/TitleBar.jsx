import React from 'react';

export default TitleBar = ({ children }) => {
  return (
    <nav className="TitleBar navbar bg-secondary text-dark border-bottom">
      <h1 className="serif font-weight-light">IDW</h1>
      {children}
    </nav>
  );
}
