import React, { Component } from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import {App, Home, NoMatch} from 'containers';

export default class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRedirect to="home" />
            <Route path="home" component={Home}/>
            <Route path="*" component={NoMatch}/>
          </Route>
        </Router>
      );
  }
}
