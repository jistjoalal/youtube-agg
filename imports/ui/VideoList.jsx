import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Videos from '/imports/api/videos';

class VideoList extends React.Component {
  render() {
    return (
      <div className="container bg-dark shadow">
        { this.renderVideos() }
      </div>
    )
  }
  renderVideos() {
    return this.props.videos.map(video =>
      <a href={video.url} key={video._id}>
        <div className="row border-bottom p-2 text-light">

          <div className="col-4">
            <img src={video.img} />
          </div>
          
          <div className="col-8 d-flex flex-column justify-content-center">
            <h4>{video.title}</h4>
            <h5 className="text-muted">{video.channelTitle}</h5>
            <span className="text-muted">
              {video.duration} - {video.viewCount} - {video.postedAgo}
            </span>
          </div> 

        </div>   
      </a>
    )
  }
}

const VideoListTracker = withTracker(({ query = {}, sortBy = 'postedTime', dir = -1 }) => {
  return {
    videos: Videos.find(query, { sort: { [sortBy]: dir }}).fetch(),
  }
})(VideoList);

export default VideoListTracker;
