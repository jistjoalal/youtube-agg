import { expect } from 'chai';

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
        expect(channel).to.deep.equal(TEST_CHANNEL);
      });

      it('scrapes videos', function() {
        const videos = Videos.find().fetch();
        expect(videos).to.not.be.empty;
      });
    });
  });
}

