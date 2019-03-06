import { Mongo } from 'meteor/mongo';

export default Videos = new Mongo.Collection('videos');

if (Meteor.isServer) {
  Meteor.publish('videos', (query, sortBy, dir, page) => {
    return Videos.find(
      query,
      {
        sort: { [sortBy]: dir },
        limit: page * 10,
      },
    );
  });
}
