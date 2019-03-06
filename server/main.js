import { Meteor } from 'meteor/meteor';
import scrapeIfEmpty from '/imports/api/scraper';
import Videos from '/imports/api/videos';

Meteor.startup(() => {
  Videos.remove({});
  scrapeIfEmpty();
});
