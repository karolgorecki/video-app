import React, { Component, PropTypes } from 'react';
import { Navbar, Footer } from 'components';
import { Link } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  state = {
    isMenuOpen: false
  };

  toggleMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  offCanvas = () => {
    if (this.state.isMenuOpen) {
      return 'active';
    }
    return '';
  }

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
            <div className="col-xs-6 col-sm-3 sidebar-offcanvas">
              <div className="list-group">
                <Link to="/home" activeClassName="list-group-item active" className="list-group-item">
                  <span className="glyphicon glyphicon-home"></span> Homepage
                </Link>
                <Link to="/videos" activeClassName="list-group-item active" className="list-group-item">
                  <span className="glyphicon glyphicon-facetime-video"></span> List video
                </Link>
                <Link to="/new" activeClassName="list-group-item active" className="list-group-item">
                  <span className="glyphicon glyphicon-plus"></span> Add new video
                </Link>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
