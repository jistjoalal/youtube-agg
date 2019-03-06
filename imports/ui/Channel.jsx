import React from 'react';

import App from './App';

export default class Channel extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const query = { channelId: id };
    return (
      <div>
        <App query={query} />
      </div>
    )
  }
}
