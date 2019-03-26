import React from 'react';

import TitleLinks from './TitleLinks';

export default TitleBar = ({ children, title }) =>
  <nav className="TitleBar">

    <TitleLinks title={title} />

    <h1 className="TitleBar__title">{title}</h1>

    <div className="TitleBar__collapse" id="navbarSupportedContent">
      
      {children}
  
      {!Meteor.status().connected && Meteor.status().retryCount > 2 &&
        <p className="badge badge-dark">Offline</p>
      }
  
      {/* {Meteor.isDevelopment &&
        <button
          className="button-dark"
          onClick={_ => Meteor.call('videos.scrape')}
        >
          Scrape
        </button> 
      } */}
  
    </div>

  </nav>
