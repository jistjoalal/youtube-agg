import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

export default class Request extends React.Component {
  render() {
    const { _id, count } = this.props.request;
    return (
      <div className="Request">

        <button
          className="button-light"
          onClick={this.voteOn}
        >
          <span className="lead">
            <FaThumbsUp /> {count}
          </span>
          
        </button>

        <p className="Request__title">
          {_id}
        </p>

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
