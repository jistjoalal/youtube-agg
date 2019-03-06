import React from 'react';

import VideoList from './VideoList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sortBy: 'postedTime',
    };
  }
  render() {
    const { sortBy } = this.state;
    return (
      <div className="bg-light">
        <h1>IDW</h1>

        <button onClick={this.changeSort('viewInt')}>Views</button>
        <button onClick={this.changeSort('postedTime')}>Upload Date</button>
        <button onClick={this.changeSort('durInSec')}>Duration</button>

        <VideoList sortBy={sortBy} />
      </div>
    )
  }
  changeSort = sortBy => _ => {
    this.setState({
      sortBy,
    })
  }
}
