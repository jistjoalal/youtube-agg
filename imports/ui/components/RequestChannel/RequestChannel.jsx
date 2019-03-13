import React from 'react';

import TitleBar from '../TitleBar';
import FlipMoveList from '../FlipMoveList';

import Request from './Request';
import AddRequest from './AddRequest';

export default class RequestChannel extends React.Component {
  render() {
    const { channelRequests } = this.props;
    return (
      <div>

        <TitleBar title="Request a Channel"></TitleBar>

        <div className="Section container bg-dark p-2">

          <div className="d-flex bg-light">

            <div className="w-50 p-2 border-right">

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

            <div className="mr-2 p-2">
              <AddRequest />
            </div>

          </div>

        </div>

      </div>
    );
  }
}
