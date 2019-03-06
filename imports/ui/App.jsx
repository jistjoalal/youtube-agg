import React from 'react';

import VideoList from './VideoList';
import TitleBar from './TitleBar';

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
        <TitleBar title="IDW">
          <div className="d-flex justify-content-center">
            { this.renderSortButton('viewInt') }
            { this.renderSortButton('postedTime') }
            { this.renderSortButton('durInSec') }
          </div>
        </TitleBar>

        <VideoList sortBy={sortBy} reverse={reverse} />
      </div>
    )
  }
  renderSortButton = col => {
    const { reverse, sortBy } = this.state;
    const selected = sortBy == col;
    return (
      <button className="btn btn-dark m-1"
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
