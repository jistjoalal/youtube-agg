import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './ui/pages/App';
import Channel from './ui/pages/Channel';

export default Routes = _ =>
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/channel/:id" component={Channel} />
      <Route component={App} />
    </Switch>
  </Router>
