import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * Sidebar returns sidebar menu
 */
export default class Sidebar extends Component {
  /**
   * render renders Sidebar
   */
  render() {
    return (
      <div className="col-xs-6 col-sm-3 sidebar-offcanvas">
        <div className="list-group">
          <Link to="/home" activeClassName="list-group-item active" className="list-group-item">
            <span className="glyphicon glyphicon-home"></span> Home
          </Link>
          <Link to="/video" activeClassName="list-group-item active" className="list-group-item">
            <span className="glyphicon glyphicon-facetime-video"></span> List videos
          </Link>
          <Link to="/new" activeClassName="list-group-item active" className="list-group-item">
            <span className="glyphicon glyphicon-plus"></span> Add new video
          </Link>
        </div>
      </div>
    );
  }
}
