import { withTracker } from 'meteor/react-meteor-data';

import ChannelRequests from '../../api/channelRequests';

export default RequestChannelTracker = withTracker(() => {
  Meteor.subscribe('channelRequests');
  const query = {};
  const projection = {
    sort: { count: -1 },
  };
  const channelRequests = ChannelRequests.find(query, projection).fetch();
  return {
    channelRequests,
  };
});
