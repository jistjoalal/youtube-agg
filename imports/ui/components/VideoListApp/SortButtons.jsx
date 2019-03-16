import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

const COL_TEXT = {
  'postedTime': 'Upload Date',
  'viewsPerSec': 'Trending',
  'duration': 'Duration',
  'viewCount': 'Views',
};

const SortArrow = ({ reverse }) =>
  <span className="SortButtons__arrow">
    {reverse ?
      <FaAngleUp className="SortButtons__up" />
    : <FaAngleDown />}
  </span>

const SortButton = ({ col, reverse, sortBy, change }) =>
  <button className="button" onClick={change(col)}>
    {COL_TEXT[col]}
    {sortBy == col &&
      <SortArrow reverse={reverse} />
    }
  </button>

export default SortButtons = ({ ...rest }) =>
  <div className="SortButtons">
    {Object.keys(COL_TEXT).map(col =>
      <SortButton key={col} col={col} {...rest} />
    )}
  </div>
