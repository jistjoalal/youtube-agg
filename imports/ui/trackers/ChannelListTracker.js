import { withTracker } from 'meteor/react-meteor-data';

import { CHANNEL_IDS } from '../../api/scraper/channels';

export default ChannelListTracker = withTracker(_ => {
  return {
    channels: CHANNEL_IDS,
  };
})
