import React from 'react';
import {
  FaHourglassHalf,
  FaRegEye,
  FaFire,
  FaCloudUploadAlt,
  FaAngleUp,
  FaAngleDown,
} from 'react-icons/fa';

const COL_TEXT = {
  'postedTime': <span><FaCloudUploadAlt /> Upload Date</span>,
  'viewsPerSec': <span><FaFire /> Trending</span>,
  'duration': <span><FaHourglassHalf /> Duration</span>,
  'viewCount': <span><FaRegEye /> Views</span>,
};

const SortArrow = ({ reverse }) =>
  <span className="SortButtons__arrow">
    {reverse ?
      <FaAngleUp />
    : <FaAngleDown />}
  </span>

const SortButton = ({ col, reverse, sortBy, change }) =>
  <button className="SortButtons__btn" onClick={change(col)}>
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
