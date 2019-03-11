import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

const COL_TEXT = {
  'viewCount': 'Views',
  'postedTime': 'Upload Date',
  'duration': 'Duration',
  'viewsPerSec': 'Trending',
};

const SortArrow = ({ reverse }) =>
  <span className="ml-2">
    {reverse ? <FaAngleUp className="mb-1" /> : <FaAngleDown />}
  </span>

const SortButton = ({ col, reverse, sortBy, change }) =>
  <button className="btn btn-dark m-1" onClick={change(col)}>
    {COL_TEXT[col]}
    {sortBy == col && <SortArrow reverse={reverse} />}
  </button>

export default SortButtons = ({ ...rest }) =>
  Object.keys(COL_TEXT).map(col =>
    <SortButton key={col} col={col} {...rest} />
  )
