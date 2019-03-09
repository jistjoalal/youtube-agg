import { rendersOk } from '../../test/helpers';
import VideoListApp from './VideoListApp';

/**
 * Tests
 */

if (Meteor.isClient) {

  describe('VideoListApp', function() {
    rendersOk(VideoListApp);
  });
}
