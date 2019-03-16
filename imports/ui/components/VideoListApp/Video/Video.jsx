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
    if (!video) return null;
    return (
      <div className="Video">
        { open ?
          <VideoPlayer video={video} close={this.toggle(false)} />
        : <VideoPreview video={video} open={this.toggle(true)} /> }
      </div>   
    )
  }
  toggle = open => _ => this.setState({ open });
}
