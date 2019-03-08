import { withTracker } from 'meteor/react-meteor-data';

import Channels from '../../api/channels';

export default ChannelTracker = withTracker(({ match }) => {
  const { id } = match.params;
  const channelsHandle = Meteor.subscribe('channels');
  const loading = !channelsHandle.ready();
  const channel = Channels.findOne({ _id: id });
  return {
    loading,
    channel,
  };
});
