import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * Navbar create the top bar with user name & right menu button
 */
export default class Navbar extends Component {
  static propTypes = {
    toggleMenu: PropTypes.func.isRequired
  };

  getUserName = () => {
    return 'Karol Górecki';
  }

  /**
   * render renders Navbar
   */
  render() {
    const styles = require('./Navbar.scss');
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
              <span className="glyphicon glyphicon-play-circle"></span>
              {' '}
              VideoApp
            </Link>
            <div style={{float: 'right'}} className={styles.menuIcon + ' visible-xs'}>
              <button onClick={this.props.toggleMenu} className="navbar-toggle collapsed" type="button">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <p style={{float: 'right'}} className="navbar-text">
              {' '}
              <a className={styles.accountLink + ' navbar-link'} href="#">
                <span aria-hidden="true" className="glyphicon glyphicon-user"></span>
                {' '}
                {this.getUserName()}
              </a>
            </p>
        </div>
      </nav>
    );
  }
}
