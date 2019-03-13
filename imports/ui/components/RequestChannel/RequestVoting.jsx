import React from 'react';

import FlipMoveList from '../FlipMoveList';
import Request from './Request';

export default class RequestVoting extends React.Component {
  render() {
    const { channelRequests } = this.props;
    return (
      <div className="RequestVoting p-2 border-top border-left">

        <p className="lead">
          Voting
        </p>

        <p className="text-muted">
          Already been suggested? Take part in the democratic process and
          give your favorite candidate some clicks.
        </p>

        {channelRequests.length ?
          <FlipMoveList>
            {channelRequests.map(request =>
              <Request key={request._id} request={request} />
            )}
          </FlipMoveList> 
        : <p>None so far!</p>
        }
        
      </div>
    );
  }
}