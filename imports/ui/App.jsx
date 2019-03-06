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
      page: 1,
    };
  }
  render() {
    const { sortBy, reverse, page } = this.state;
    return (
      <div className="bg-light d-flex flex-column justify-content-center">
        <TitleBar title="IDW">
          <div className="d-flex justify-content-center">
            { this.renderSortButton('postedTime') }
            { this.renderSortButton('viewInt') }
            { this.renderSortButton('durInSec') }
          </div>
        </TitleBar>

        <VideoList sortBy={sortBy} reverse={reverse} page={page} />

        { this.renderPageControls() }
      </div>
    )
  }
  renderPageControls() {
    return (
      <div className="d-flex justify-content-around m-1">
        <a className="btn btn-secondary" href="#">
          Top
        </a>
        <button className="btn btn-secondary" onClick={this.nextPage}>
          More
        </button>
      </div>
    )
  }
  nextPage = _ => {
    this.setState(state => ({
      page: state.page + 1,
    }));
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
      page: 1,
    }));
  }
}

const SortArrow = ({ reverse }) => {
  return (
    reverse ? ' ^' : ' v'
  )
}
