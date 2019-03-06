import React from 'react';

export default class VideoEmbed extends React.Component {
  render() {
    const { videoId } = this.props;
    return (
      <div>
        <iframe className="shadow"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          width="560" height="315" frameBorder="0" allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
      </div>
    )
  }
}
