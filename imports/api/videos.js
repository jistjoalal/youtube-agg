import { Mongo } from 'meteor/mongo';

export default Videos = new Mongo.Collection('videos');

if (Meteor.isServer) {
  Meteor.publish('videos', (query, sortBy, dir, page) => {
    const projection = {
      sort: { [sortBy]: dir },
      limit: page * 10,
    }
    return Videos.find(query, projection);
  });
}
