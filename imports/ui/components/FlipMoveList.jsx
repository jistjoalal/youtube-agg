import React from 'react';
import FlipMove from 'react-flip-move';

export default FlipMoveList = ({ children }) =>
  <FlipMove
    enterAnimation="fade"
    leaveAnimation="fade"
    staggerDurationBy="10"
  >
    {children}
  </FlipMove>
