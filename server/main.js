import { Meteor } from 'meteor/meteor';

import '../imports/config/simple-schema-config';

import scrape from '../imports/api/scraper';
import ChannelRequests from '../imports/api/channelRequests';

Meteor.startup(_ => {
  if (Meteor.isDevelopment) {
    // scrape();
  }

  if (Meteor.isProduction) {
    scrape();
    schedule(scrape, 'every 1 hour');
  }
});

const schedule = (job, str) => {
  SyncedCron.add({
    name: 'Video Scraper',
    schedule: parser => parser.text(str),
    job,
  });
  SyncedCron.start();
}
