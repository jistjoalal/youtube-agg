import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Helpers
 */

// Link components complain if not nested w/i router
export const withRouter = Component =>
  <Router>
    <Component />
  </Router>

export const rendersOk = Component => {
  it('renders without crashing', function() {
    const div = document.createElement('div');
    ReactDOM.render(withRouter(Component), div);
  });
}
