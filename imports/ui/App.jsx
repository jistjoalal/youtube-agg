import React from 'react';

import VideoList from './VideoList';

const COL_TEXT = {
  'viewInt': 'Views',
  'postedTime': 'Upload Date',
  'durInSec': 'Duration',
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sortBy: 'postedTime',
      reverse: false,
    };
  }
  render() {
    const { sortBy, reverse } = this.state;
    return (
      <div className="bg-light">
        <h1>IDW</h1>

        <div className="container">
          { this.renderSortButton('viewInt') }
          { this.renderSortButton('postedTime') }
          { this.renderSortButton('durInSec') }
        </div>

        <VideoList sortBy={sortBy} reverse={reverse} />
      </div>
    )
  }
  renderSortButton = col => {
    const { reverse, sortBy } = this.state;
    const selected = sortBy == col;
    return (
      <button className="btn btn-outline-dark"
        onClick={this.changeSort(col)}>
        {COL_TEXT[col]}
        {selected && <SortArrow reverse={reverse} />}
      </button>
    )
  }
  changeSort = sortBy => _ => {
    this.setState(state => ({
      sortBy,
      reverse: state.sortBy == sortBy && !state.reverse,
    }));
  }
}

const SortArrow = ({ reverse }) => {
  return (
    reverse ? ' ^' : ' v'
  )
}
