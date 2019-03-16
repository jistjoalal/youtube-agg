import React from 'react';
import { FaInfinity } from 'react-icons/fa';

export default PageControls = ({ autoScroll, nextPage, toggleAutoScroll }) =>
  <div className="PageControls">
    <a className="PageControls__button" href="#">
      Top
    </a>
    <button className="PageControls__button" onClick={nextPage}>
      More
    </button>
    <button className={`PageControls__button ${autoScroll ? 'active' : ''}`}
      onClick={toggleAutoScroll}
    >
      Scroll {autoScroll ? <FaInfinity /> : '∞'}
    </button>
  </div>
