import React from 'react';

export default TitleBar = ({ title, children }) => {
  return (
    <nav className="TitleBar navbar bg-secondary text-dark border-bottom">
      <h1>{title}</h1>
      {children}
    </nav>
  );
}
