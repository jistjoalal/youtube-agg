import React from 'react';

import TitleBar from './TitleBar';

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
                <input className="form-control" type="text" name="channel" />
              </div>

              <button className="btn btn-dark">Submit</button>

            </form>

          </div>

        </div>

      </div>
    );
  }
  handleSubmit = e => {
    e.preventDefault();
    const channel = e.target.channel.value;
    console.log(channel);
  }
}
