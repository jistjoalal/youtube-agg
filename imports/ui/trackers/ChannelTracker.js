import { withTracker } from 'meteor/react-meteor-data';

import Videos from '../../api/videos';

export default ChannelTracker = withTracker(({ match }) => {
  const query = { channelId: match.params.id };
  const aVideo = Videos.findOne(query);
  const title = aVideo ? aVideo.channelTitle : "Channel Not Found";
  return {
    query,
    title,
  };
});
