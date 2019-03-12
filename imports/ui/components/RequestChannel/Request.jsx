import React from 'react';

export default class Request extends React.Component {
  render() {
    const { _id, count } = this.props.request;
    return (
      <div>
        <p>
          {_id} - {count}
        </p>
        <button onClick={this.voteOn}>+</button>
      </div>
    )
  }
  voteOn = e => {
    e.preventDefault();
    const { _id } = this.props.request;
    Meteor.call('channelRequests.inc', _id, (err, res) => {
      if (err) return console.log(err);
    });
  }
}
