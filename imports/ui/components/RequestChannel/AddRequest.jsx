import React from 'react';

export default class AddRequest extends React.Component {
  constructor() {
    super();
    this.state = {
      err: '',
    };
  }
  render() {
    const { err } = this.state;
    return (
      <div className="AddRequest">

        <p className="lead">
          Someone Missing?
        </p>

        <p className="text-muted">
          Let us know if you've got a lead on a YouTuber producing honest,
          meaningful conversation.
        </p>

        <form onSubmit={this.handleSubmit}>

          {err &&
            <p className="alert alert-dark">
              {err}
            </p>
          }

          <div className="form-group">
            <label>Channel Name</label>
            <input className="form-control" type="text" ref="channel" />
          </div>

          <button className="btn btn-dark">Submit</button>

        </form>
      </div>
    );
  }
  handleSubmit = e => {
    e.preventDefault();
    const channel = this.refs.channel.value;
    Meteor.call('channelRequests.inc', channel, (err, res) => {
      if (err) {
        console.log(err);
        this.setState({ err: err.reason });
      }
      else {
        this.setState({ err: '' });
        this.refs.channel.value = '';
        this.refs.channel.blur();
      }
    });
  }
}
