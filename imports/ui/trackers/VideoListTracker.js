import { withTracker } from 'meteor/react-meteor-data';

import Videos from '../../api/videos';

export default VideoListTracker = withTracker((
  { query = {}, sortBy = 'postedTime', reverse = false, page = 1, searchTerm = '' }
) => {
  const withSearch = {
    ...query,
    ...(searchTerm ? { $text: { $search: searchTerm } } : {}),
  };
  const dir = reverse ? 1 : -1;
  const videosHandle = Meteor.subscribe('videos', withSearch, sortBy, dir, page);
  const videos = Videos.find({}, { sort: { [sortBy]: dir }}).fetch();
  const loading = !videosHandle.ready();
  return {
    videos,
    loading,
  };
});
