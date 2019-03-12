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

        <div className="section container bg-dark p-2">

          <div className="jumbotron mb-0">

            <AddRequest />

            <FlipMoveList>
              {channelRequests.map(request =>
                <Request key={request._id} request={request} />
              )}
            </FlipMoveList>

          </div>

        </div>

      </div>
    );
  }
}
