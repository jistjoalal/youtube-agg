import React from 'react';

import TitleBar from '../TitleBar';
import AddRequest from './AddRequest';
import RequestVoting from './RequestVoting';

export default class RequestChannel extends React.Component {
  render() {
    const { channelRequests } = this.props;
    return (
      <div>

        <TitleBar title="Request a Channel"></TitleBar>

        <div className="Section container bg-dark p-2">

          <div className="RequestChannel bg-light">

            <AddRequest />

            <RequestVoting channelRequests={channelRequests} />

          </div>

        </div>

      </div>
    );
  }
}
