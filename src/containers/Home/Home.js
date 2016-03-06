import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Video App</h1>
          <p>The best Video managing tool you ever had! Add, remove & edit your videos with ease!</p>
          <p>
            <Link to="/videos" className="btn btn-success btn-lg">
              Check Videos
              {' '}
              <span className="glyphicon glyphicon-menu-right" style={{top: 3}}></span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
