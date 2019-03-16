import React from 'react';

import TitleLinks from './TitleLinks';

export default TitleBar = ({ children, title }) =>
  <nav className="TitleBar">

    <TitleLinks title={title} />

    <h1 className="TitleBar__title">{title}</h1>
    
    {children}

    {Meteor.isDevelopment &&
      <button
        className="button"
        onClick={_ => Meteor.call('videos.scrape')}
      >
        Scrape
      </button> 
    }

  </nav>
