import { withTracker } from 'meteor/react-meteor-data';

import Channels from '../../api/channels';

export default ChannelListTracker = withTracker(_ => {
  Meteor.subscribe('channels');
  const query = {};
  const projection = {
    sort: { title: 1 },
  }
  const channels = Channels.find(query, projection).fetch();
  return {
    channels,
  };
})
