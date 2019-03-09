const should = require('chai').should();

import { scrapeChannel } from './scraper';

import { TEST_CHANNEL } from './fixtures';

if (Meteor.isServer) {

  describe('scraper', function() {

    describe('scrapeChannel', function() {

      const { _id } = TEST_CHANNEL;

      before(async function() {
        await scrapeChannel(_id);
      });

      it('scrapes channel', function() {
        const channel = Channels.findOne(_id);
        channel.should.deep.equal(TEST_CHANNEL);
      });

      it('scrapes videos', function() {
        const videos = Videos.find().fetch();
        videos.should.not.be.empty;
      });
    });
  });
}

