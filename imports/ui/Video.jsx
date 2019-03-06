import React from 'react';

import VideoEmbed from './VideoEmbed';
import VideoDescription from './VideoDescription';

export default class Video extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  render() {
    const { video } = this.props;
    const { open } = this.state;
    return (
      <div className="row border-bottom p-2 text-light">

        { open ?
          <div className="d-flex justify-content-center align-items-start w-100">
            <VideoEmbed videoId={video.videoId} />
            <button className="btn btn-outline-danger ml-3 p-1"
              onClick={this.close}>&times;</button>
          </div>
        : <div className="col-4">
            <a className="btn" href="" onClick={this.open}>
              <img src={video.img} />
            </a>
          </div> 
        }
        { open ?
          <div className="mx-4">
            <VideoDescription video={video} />
          </div>
        : <div className="col-8 d-flex flex-column justify-content-center">
            <VideoDescription video={video} /> 
          </div>
        }
      </div>   
    )
  }
  open = e => {
    e.preventDefault();
    this.setState({
      open: true,
    });
  }
  close = e => {
    e.preventDefault();
    this.setState({
      open: false,
    });
  }
}
