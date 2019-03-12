import React from 'react';
import { Link } from 'react-router-dom';

// Must be class Component to work w/ FlipMove
export default class ChannelLink extends React.Component {
  render() {
    const { _id, title, avatar } = this.props;
    return (
      <div className="row border-bottom align-items-center">
        <img src={avatar} height="100" width="100" />
        <Link className="h3 ml-2" to={`channel/${_id}/`}>
          {title}
        </Link>
      </div>
    );
  }
}
