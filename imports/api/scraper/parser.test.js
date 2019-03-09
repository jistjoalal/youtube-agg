import fs from 'fs';
const should = require('chai').should();

import {
  vidHits,
  parseChannel,
  parseVid,
} from './parser';

import {
  TEST_CHANNEL,
  TEST_VIDEO,
} from './fixtures';

/**
 * Helpers
 */

const loadHtmlFile = filename => {
  const path = `/imports/api/scraper/fixtures/${filename}.html`;
  const html = fs.readFileSync(process.env.PWD + path).toString();
  return html;
}

const assertProperties = (actual, expected) => {
  Object.keys(expected).forEach(property => {
    it(`parses ${property}`, function() {
      actual[property].should.equal(expected[property]);
    });
  });
}

/**
 * Tests
 */

if (Meteor.isServer) {

  describe('parser', function() {

    describe('parseChannel', function() {
      
      const html = loadHtmlFile('videosPage');
      const actual = parseChannel(html);

      assertProperties(actual, TEST_CHANNEL);
    });

    describe('vidHits', function() {

      const html = loadHtmlFile('videosPage');
      const hits = vidHits(html);

      it('finds videos in html', function() {
        hits.length.should.be.above(0);
      });
    });

    describe('parseVid', function() {

      const html = loadHtmlFile('video');
      const actual = parseVid(html, TEST_CHANNEL);

      assertProperties(actual, TEST_VIDEO);

      // posted time is weird because of timeago-reverse
      it('parses posted time', function() {
        const diff = Date.now() - actual.postedTime;
        const months = ~~(diff / 1000 / 3600 / 24 / 30);
        months.should.equal(3)
      });
    });
  });
}
