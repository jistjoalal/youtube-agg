import React from 'react';

import VideoList from './VideoList';

export default class App extends React.Component {
  render() {
    return (
      <div className="bg-light">
        <h1>IDW</h1>
        <VideoList />
      </div>
    )
  }
}
