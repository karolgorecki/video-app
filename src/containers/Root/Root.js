import React, { Component } from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import {
  App,
  Home,
  Videos,
  New,
  NoMatch
} from 'containers';

/**
 * Root is the top level wrapper, it's rendered to HTML
 */
export default class Root extends Component {
  /**
   * render renders Root
   */
  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRedirect to="home" />
            <Route path="home" component={Home}/>
            <Route path="video(/:page)" component={Videos}/>
            <Route path="new" component={New}/>
            <Route path="*" component={NoMatch}/>
          </Route>
        </Router>
      );
  }
}
