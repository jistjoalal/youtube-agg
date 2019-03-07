import React from 'react';

const COL_TEXT = {
  'viewInt': 'Views',
  'postedTime': 'Upload Date',
  'durInSec': 'Duration',
};

const SortArrow = ({ reverse }) =>
  reverse ? ' ^' : ' v'

const SortButton = ({ col, reverse, sortBy, change }) =>
  <button className="btn btn-dark m-1" onClick={change(col)}>
    {COL_TEXT[col]}
    {sortBy == col && <SortArrow reverse={reverse} />}
  </button>

export default SortButtons = ({ ...rest }) =>
  <div className="d-flex justify-content-center">
    {Object.keys(COL_TEXT).map(col =>
      <SortButton key={col} col={col} {...rest} />
    )}
  </div>
