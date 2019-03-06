import React from 'react';

export default TitleBar = ({ title, children }) => {
  return (
    <nav class="navbar sticky-top bg-secondary text-dark">
      <h1>{title}</h1>
      {children}
    </nav>
  );
}
