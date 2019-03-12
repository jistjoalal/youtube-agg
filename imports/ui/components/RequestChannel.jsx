import React from 'react';

import TitleBar from './TitleBar';
import FlipMoveList from './FlipMoveList';

export default class RequestChannel extends React.Component {
  render() {
    return (
      <div>

        <TitleBar title="Request a Channel"></TitleBar>

        <div className="section container bg-dark p-2">

          <div className="jumbotron mb-0">

            <form onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label>Channel Name</label>
                <input className="form-control" type="text" ref="channel" />
              </div>

              <button className="btn btn-dark">Submit</button>

            </form>

            <FlipMoveList>
              { this.renderTopRequests() }
            </FlipMoveList>

          </div>

        </div>

      </div>
    );
  }
  renderTopRequests() {
    const { channelRequests } = this.props;
    return (
      channelRequests.map(({ _id, count }) =>
        <div key={_id}>
          <p>
            {_id} - {count}
          </p>
          <button onClick={this.voteOn(_id)}>+</button>
        </div>
      )
    );
  }
  voteOn = _id => e => {
    e.preventDefault();
    Meteor.call('channelRequests.inc', _id, (err, res) => {
      if (err) return console.log(err);
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const channel = this.refs.channel.value;
    Meteor.call('channelRequests.inc', channel, (err, res) => {
      if (err) return console.log(err);
      else {
        this.refs.channel.value = '';
        this.refs.channel.blur();
      }
    });
  }
}
