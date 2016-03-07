import React, { Component, PropTypes } from 'react';
import { Navbar, Sidebar } from 'components';

/**
 * App container renders pages given by react router
 */
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  state = {
    isMenuOpen: false
  };

  componentWillMount = () => {
    if (localStorage.getItem('state') !== null) {
      this.setState(JSON.parse(localStorage.state));
    }
  }

  componentDidUpdate = () => {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  toggleMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  offCanvas = () => {
    if (this.state.isMenuOpen) {
      return 'active';
    }
    return '';
  }

  /**
   * render renders App
   */
  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.content}>
        <Navbar toggleMenu={this.toggleMenu} />
        <div className="container">
          <div className={`row row-offcanvas row-offcanvas-right ${this.offCanvas()}`}>
            <div className="col-xs-12 col-sm-9">
              {this.props.children}
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
