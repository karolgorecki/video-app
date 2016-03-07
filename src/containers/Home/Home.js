import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * Home renders home page
 */
export default class Home extends Component {
  /**
   * render renders Home
   */
  render() {
    return (
      <div className="jumbotron">
        <h1>Video App</h1>
        <p>The best Video managing tool you ever had! Add, remove & edit your videos with ease!</p>
        <p>
          <Link to="/video" className="btn btn-success btn-lg">
            Check Videos
            {' '}
            <span className="glyphicon glyphicon-menu-right" style={{top: 3}}></span>
          </Link>
        </p>
      </div>
    );
  }
}
