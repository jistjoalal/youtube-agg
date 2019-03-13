import { Mongo } from 'meteor/mongo';
import scrape from './scraper';

export default Videos = new Mongo.Collection('videos', {
  collation: {
    locale: 'en_US',
    strength: 2,  // case insensitive search
  }
});

if (Meteor.isServer) {
  Meteor.publish('videos', (query, sortBy, dir, page) => {
    const projection = {
      sort: { [sortBy]: dir },
      limit: page * 10,
    }
    return Videos.find(query, projection);
  });
}

Meteor.methods({
  'videos.scrape'() {
    if (Meteor.isDevelopment && Meteor.isServer) {
      scrape();
    }
  }
});
