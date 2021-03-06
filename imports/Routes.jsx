import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './ui/pages/Home';
import Channel from './ui/pages/Channel';
import ChannelList from './ui/pages/ChannelList';
import RequestChannel from './ui/pages/RequestChannel';
import About from './ui/pages/About';

import ScrollToTop from './ui/components/ScrollToTop';

export default Routes = _ =>
  <Router>
    <ScrollToTop>
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
  
        {/* request-channel */}
        <Route path="/request-channel" exact component={RequestChannel} />
  
        {/* about */}
        <Route path="/about" component={About} />
  
        {/* not found */}
        <Route component={Home} />
        
      </Switch>
    </ScrollToTop>
  </Router>
