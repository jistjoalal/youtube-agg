import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import TitleBar from '../components/TitleBar';

export default About = _ =>
  <div>

    <Helmet>
      <title>About</title>
    </Helmet>

    <TitleBar title="About"></TitleBar>

    <div className="Section container bg-dark p-2">

      <div className="jumbotron mb-2">

        <p className="lead">
          What is this site?
        </p>
        
        <p>
          This is an aggregate for IDW-related videos. It searches IDW
          youtube channels for new videos once an hour.
        </p>
        
        <Link
          className="btn btn-secondary"
          to="/channels"
        >
          All IDW Channels
        </Link>

        <p />

        <a
          target="blank"
          className="btn btn-secondary"
          href="https://github.com/jistjoalal/youtube-agg"
        >
          <code>
            Source Code
          </code>
        </a>  

      </div>

      <div className="jumbotron mb-0">
        <p className="lead">
          What is the IDW?
        </p>
        <em>
          "Most simply, it is a collection of iconoclastic thinkers, academic renegades
          and media personalities who are having a rolling <b>conversation</b> — on podcasts,
          YouTube and Twitter, and in sold-out auditoriums — that sound <b>unlike anything
          else</b> happening, at least publicly, in the culture right now."
        </em>
        <p>
          <a href="https://www.nytimes.com/2018/05/08/opinion/intellectual-dark-web.html"
            target="blank"
          >
            - Meet the Renegades of the Intellectual Dark Web - Bari Weiss
          </a>
        </p>
      </div>

    </div>
  </div>
