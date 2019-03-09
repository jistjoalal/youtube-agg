import React from 'react';

export default PageControls = ({ autoScroll, nextPage, toggleAutoScroll }) =>
  <div className="d-flex justify-content-around m-1 fixed-bottom">
    <a className="btn btn-secondary shadow" href="#">
      Top
    </a>
    <button className="btn btn-secondary shadow" onClick={nextPage}>
      More
    </button>
    <button className={`btn btn-secondary shadow ${autoScroll ? 'active' : ''}`}
      onClick={toggleAutoScroll}
    >
      {autoScroll ? <u>Scroll ∞</u> : 'Scroll ∞'}
    </button>
  </div>
