import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Videos from '/imports/api/videos';

import Video from './Video';

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
      <Video key={video._id} video={video} /> 
    )
  }
}

const VideoListTracker = withTracker(({ query = {}, sortBy = 'postedTime', reverse = false }) => {
  const dir = reverse ? 1 : -1;
  return {
    videos: Videos.find(query, { sort: { [sortBy]: dir }}).fetch(),
  }
})(VideoList);

export default VideoListTracker;
