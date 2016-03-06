import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * NoMatch renders the 404 page
 */
export default class NoMatch extends Component {
  /**
   * render renders NoMatch
   */
  render() {
    return (
      <div className="jumbotron">
        <h1>Page Not Found</h1>
        <p>The page you requested could not be found, either contact your webmaster or try again. Use your browsers <b>Back</b> button to navigate to the page you have prevously come from</p>
        <p><b>Or you could just press this neat little button:</b></p>
        <p>
          <Link to="/home" className="btn btn-primary btn-lg">
            <span className="glyphicon glyphicon-home"></span> Take me home
          </Link>
        </p>
      </div>
      );
  }
}
