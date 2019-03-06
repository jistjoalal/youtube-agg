import React from 'react';

import VideoList from './VideoList';
import TitleBar from './TitleBar';

const COL_TEXT = {
  'viewInt': 'Views',
  'postedTime': 'Upload Date',
  'durInSec': 'Duration',
};

const SortArrow = ({ reverse }) => reverse ? ' ^' : ' v';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sortBy: 'postedTime',
      reverse: false,
      page: 1,
      autoScroll: false,
    };
  }
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
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
    const { autoScroll } = this.state;
    return (
      <div className="d-flex justify-content-around m-1 fixed-bottom">
        <a className="btn btn-secondary" href="#">
          Top
        </a>
        <button className="btn btn-secondary" onClick={this.nextPage}>
          More
        </button>
        <button className="btn btn-secondary">
          <label className="m-0">
            <input type="checkbox" checked={autoScroll} onChange={this.toggleAutoScroll}/>
            &nbsp;Scroll ∞ 
          </label>
        </button>
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
  handleScroll = event => {
    const { autoScroll } = this.state;
    const e = event.target.scrollingElement;
    const atBottom = e.scrollHeight - e.scrollTop === e.clientHeight;
    if (atBottom && autoScroll) {
      this.nextPage();
    }
  }
  toggleAutoScroll = _ => {
    this.setState(state => ({
      autoScroll: !state.autoScroll,
      page: state.page + +!state.autoScroll,
    }));
  }
  nextPage = _ => {
    this.setState(state => ({
      page: state.page + 1,
    }));
  }
  changeSort = sortBy => _ => {
    this.setState(state => ({
      sortBy,
      reverse: state.sortBy == sortBy && !state.reverse,
      page: 1,
    }));
  }
}
