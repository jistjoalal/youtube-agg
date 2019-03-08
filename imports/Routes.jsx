import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './ui/pages/Home';
import Channel from './ui/pages/Channel';
import ChannelList from './ui/pages/ChannelList';

export default Routes = _ =>
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/channels" exact component={ChannelList} />
      <Route path="/channel/:id" component={Channel} />
      <Route component={Home} />
    </Switch>
  </Router>
