import { Meteor } from 'meteor/meteor';
import updateVideos from '/imports/api/scraper';
import Videos from '/imports/api/videos';

Meteor.startup(() => {
  // Videos.remove({});
  // updateVideos();
});
