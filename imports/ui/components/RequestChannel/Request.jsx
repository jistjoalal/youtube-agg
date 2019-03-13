import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

export default class Request extends React.Component {
  render() {
    const { _id, count } = this.props.request;
    return (
      <div className="Request shadow-sm m-2 bg-light border">

        <button
          className="btn btn-secondary m-2 text-nowrap"
          onClick={this.voteOn}
        >
          <FaThumbsUp className="mb-2" />
          <span className="lead m-2">
            {count}
          </span>
        </button>

        <p
          className="m-2 text-truncate mw-100"
          onClick={e => e.preventDefault()}   
        >
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
