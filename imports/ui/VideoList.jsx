import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Videos from '/imports/api/videos';

import Video from './Video';

class VideoList extends React.Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container bg-dark shadow">
        { this.renderVideos() }
        {loading && <p className="alert alert-dark shadow m-3">Loading...</p>}
      </div>
    )
  }
  renderVideos() {
    const { videos } = this.props;
    return videos.map(video =>
      <Video key={video._id} video={video} /> 
    )
  }
}

const VideoListTracker = withTracker((
  { query = {}, sortBy = 'postedTime', reverse = false, page = 1 }
) => {
  const dir = reverse ? 1 : -1;
  const videosHandle = Meteor.subscribe('videos', query, sortBy, dir, page);
  const videos = Videos.find({}, { sort: { [sortBy]: dir }}).fetch();
  const loading = !videosHandle.ready();
  return {
    videos,
    loading,
  }
});

export default VideoListTracker(VideoList);
