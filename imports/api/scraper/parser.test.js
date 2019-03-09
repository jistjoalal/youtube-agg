import fs from 'fs';
import { expect } from 'chai';

import {
  vidHits,
  parseChannel,
  parseVid,
  parseTimeUnit,
  parseAttr,
  parseChildText,
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
      expect(actual[property]).to.equal(expected[property]);
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
      const actual = parseChannel(html, TEST_CHANNEL._id);

      assertProperties(actual, TEST_CHANNEL);
    });

    describe('vidHits', function() {

      const html = loadHtmlFile('videosPage');
      const hits = vidHits(html);

      it('finds videos in html', function() {
        expect(hits.length).to.be.above(0);
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
        expect(months).to.equal(3)
      });
    });

    describe('parseTimeUnit', function() {

      const durations = [
        { s: '33 seconds', u: 'sec', r: 33 },
        { s: '23 minutes', u: 'min', r: 23 },
        { s: '13 hour', u: 'hou', r: 13 },
      ];
      
      it('parses time', function() {
        durations.forEach(({ s, u, r }) => {
          const res = parseTimeUnit(s, u);
          expect(res).to.equal(r);
        });
      });
    });

    describe('parseAttr', function() {

      const duration = '3 minutes, 12 seconds';
      const html = `
        <span class="video-time" aria-hidden="true">
          <span aria-label="${duration}">3:12</span>
        </span>
      `;
      const target = '.video-time > span';
      const attr = 'aria-label';

      it('parses attr', function() {
        const res = parseAttr(html, target, attr);
        expect(res).to.equal(duration);
      });
    });

    describe('parseChildText', function() {

      const views = '1,896 views';
      const postedTime = '3 months ago';
      const html = `
        <ul class="yt-lockup-meta-info">
          <li>${views}</li>
          <li>${postedTime}</li>
        </ul>
      `;
      const target = ".yt-lockup-meta-info > li";

      it('parses child 0', function() {
        const res = parseChildText(html, target, 0);
        expect(res).to.equal(views);
      });

      it('parses child 1', function() {
        const res = parseChildText(html, target, 0);
        expect(res).to.equal(views);
      });

      it('throws on invalid', function() {
        const f = _ => parseChildText('bad html', target, 2);
        expect(f).to.throw();
      });
    });
  })
}
