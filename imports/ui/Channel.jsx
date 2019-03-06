import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Videos from '../api/videos';

import App from './App';

class Channel extends React.Component {
  render() {
    const { query, title } = this.props;
    return (
      <div>
        <App query={query} title={title} />
      </div>
    )
  }
}

const ChannelTracker = withTracker(({ match }) => {
  const query = { channelId: match.params.id };
  const aVideo = Videos.findOne(query);
  const title = aVideo ? aVideo.channelTitle : "Channel Not Found";
  return {
    query,
    title,
  };
});

export default ChannelTracker(Channel);
