import React from 'react';

const GH = 'github';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title="About"></TitleBar>

        <div className="container bg-dark p-2">

          <div className="jumbotron mb-2">
            <p className="lead">
              What is this site?
            </p>
            <p>
              This is an aggregate for IDW-related videos. It searches IDW
              youtube channels for new videos once an hour.
            </p>
            <a target="blank"
              className="text-monospace btn btn-secondary ml-2"
              href="https://github.com/jistjoalal/youtube-agg"
            >
              { GH }
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
    );
  }
}
