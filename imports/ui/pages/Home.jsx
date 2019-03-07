import React from 'react';

import VideoList from '../components/VideoList';
import TitleBar from '../components/TitleBar';
import SortButtons from '../components/SortButtons';
import PageControls from '../components/PageControls';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      sortBy: 'postedTime',
      autoScroll: false,
      reverse: false,
      page: 1,
    };
  }
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    const { sortBy, reverse, page, autoScroll } = this.state;
    const title = this.props.title || "IDW";
    const query = this.props.query || {};
    return (
      <div className="d-flex flex-column justify-content-center">

        <TitleBar title={title}>
          <SortButtons sortBy={sortBy} reverse={reverse} change={this.changeSort} />
        </TitleBar>

        <VideoList query={query} sortBy={sortBy} reverse={reverse} page={page} />

        <PageControls
          autoScroll={autoScroll}
          nextPage={this.nextPage}
          toggleAutoScroll={this.toggleAutoScroll}
        />

      </div>
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
