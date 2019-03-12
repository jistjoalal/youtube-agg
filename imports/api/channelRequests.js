import { Mongo } from 'meteor/mongo';

export default ChannelRequests = new Mongo.Collection('channelRequests');

if (Meteor.isServer) {
  Meteor.publish('channelRequests', _ => {
    const query = {};
    const projection = {
      sort: { count: -1 },
      limit: 5,
    };
    return ChannelRequests.find(query, projection);
  });
}

Meteor.methods({
  'channelRequests.inc'(_id) {
    const query = { _id };
    const updates = { $inc: { count: 1 } };
    const cr = ChannelRequests.findOne({ _id });
    if (!cr) {
      ChannelRequests.insert({
        _id,
        count: 0,
      });
    }
    ChannelRequests.update(query, updates);
  },
});
