import React from 'react';

import VideoPlayer from './VideoPlayer';
import VideoPreview from './VideoPreview';

export default class Video extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  render() {
    const { open } = this.state;
    const { video } = this.props;
    return (
      <div className="row border-bottom p-2 text-light">
        { open ?
          <VideoPlayer video={video} close={this.toggle(false)} />
        : <VideoPreview video={video} open={this.toggle(true)} /> }
      </div>   
    )
  }
  toggle = open => _ => this.setState({ open });
}
