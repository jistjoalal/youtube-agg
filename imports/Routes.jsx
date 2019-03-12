import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './ui/pages/Home';
import Channel from './ui/pages/Channel';
import ChannelList from './ui/pages/ChannelList';
import About from './ui/pages/About';

export default Routes = _ =>
  <Router>
    <Switch>

      {/* home */}
      <Route path="/" exact component={Home} />
      <Route path="/@" component={Home} />
      <Route path="/@:searchTerm" component={Home} />

      {/* channel */}
      <Route path="/channel/:id" exact component={Channel} />
      <Route path="/channel/:id/@" component={Channel} />
      <Route path="/channel/:id/@:searchTerm" component={Channel} />

      {/* channels */}
      <Route path="/channels" exact component={ChannelList} />

      {/* about */}
      <Route path="/about" component={About} />

      {/* not found */}
      <Route component={Home} />
      
    </Switch>
  </Router>
