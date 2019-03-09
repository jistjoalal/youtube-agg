import { withTracker } from 'meteor/react-meteor-data';

import Channels from '../../api/channels';

export default ChannelTracker = withTracker(({ match }) => {
  const { id } = match.params;
  Meteor.subscribe('channels');
  const channel = Channels.findOne({ _id: id });
  const query = { channelId: id };
  const title = channel ? channel.title : "";
  return {
    query,
    title,
  };
});
