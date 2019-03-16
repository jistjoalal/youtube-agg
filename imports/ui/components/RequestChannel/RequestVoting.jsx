import React from 'react';

import Request from './Request';

export default class RequestVoting extends React.Component {
  render() {
    const { channelRequests } = this.props;
    return (
      <div className="RequestVoting">

        <p className="lead">
          Voting
        </p>

        <p className="text-muted">
          Already been suggested? Take part in the democratic process and
          give your favorite candidate some clicks.
        </p>

        {channelRequests.length ?
          channelRequests.map(request =>
            <Request key={request._id} request={request} />
          )
        : <p>None so far!</p>
        }
        
      </div>
    );
  }
}