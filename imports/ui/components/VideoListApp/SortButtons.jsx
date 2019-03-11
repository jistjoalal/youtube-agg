import React from 'react';

const COL_TEXT = {
  'viewCount': 'Views',
  'postedTime': 'Upload Date',
  'duration': 'Duration',
  'viewGrowth': 'Trending',
};

const SortArrow = ({ reverse }) =>
  reverse ? ' ^' : ' v'

const SortButton = ({ col, reverse, sortBy, change }) =>
  <button className="btn btn-dark m-1" onClick={change(col)}>
    {COL_TEXT[col]}
    {sortBy == col && <SortArrow reverse={reverse} />}
  </button>

export default SortButtons = ({ ...rest }) =>
  <>
    {Object.keys(COL_TEXT).map(col =>
      <SortButton key={col} col={col} {...rest} />
    )}
  </>
