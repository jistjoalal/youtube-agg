import { withTracker } from 'meteor/react-meteor-data';

import Channels from '../../api/channels';

export default ChannelListTracker = withTracker(_ => {
  Meteor.subscribe('channels');
  const channels = Channels.find().fetch();
  return {
    channels,
  };
})
