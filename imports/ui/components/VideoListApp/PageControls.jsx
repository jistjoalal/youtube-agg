import React from 'react';
import { FaInfinity } from 'react-icons/fa';

export default PageControls = ({ autoScroll, nextPage, toggleAutoScroll }) => {
  const scrollIcon = autoScroll ? <FaInfinity /> : '∞';
  const toggleClass = autoScroll ? 'active' : '';
  return (
    <div className="PageControls">

      <a
        className="PageControls__button"
        href="#"
      >
        Top
      </a>

      <button
        className="PageControls__button"
        onClick={nextPage}
      >
        More
      </button>

      <button
        className={`PageControls__button ${toggleClass}`}
        onClick={toggleAutoScroll}
      >
        Scroll {scrollIcon}
      </button>

    </div>
  );
}
