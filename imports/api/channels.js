import { Mongo } from 'meteor/mongo';

export default Channels = new Mongo.Collection('channels');

if (Meteor.isServer) {
  Meteor.publish('channels', _ => {
    const query = {};
    const projection = {
      sort: { title: 1 },
    };
    return Channels.find(query, projection);
  });
}
