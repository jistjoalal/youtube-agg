import React from 'react';
import { Helmet } from 'react-helmet';

import TitleBar from '../TitleBar';
import AddRequest from './AddRequest';
import RequestVoting from './RequestVoting';

export default class RequestChannel extends React.Component {
  render() {
    const { channelRequests } = this.props;
    return (
      <div>

        <Helmet>
          <title>Request A Channel</title>
        </Helmet>

        <TitleBar title="Request a Channel"></TitleBar>

        <div className="section">

          <div className="RequestChannel">

            <AddRequest />

            <RequestVoting channelRequests={channelRequests} />

          </div>

        </div>

      </div>
    );
  }
}
