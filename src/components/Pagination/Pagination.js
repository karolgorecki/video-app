import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * Pagination generates the buttons for pagination
 */
export default class Pagination extends Component {
  static propTypes = {
    current: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired
  };

  makePagination = () => {
    const pages = this.totalPages();
    const currentPage = this.props.current;

    const pagesNode = [];
    for (let idx = 0; idx < pages; idx++) {
      if (idx + 1 === currentPage) {
        pagesNode.push(
          <li key={idx} className="active">
            <span>{idx + 1} <span className="sr-only">(current)</span></span>
          </li>
        );
        continue;
      }
      pagesNode.push(
        <li key={idx}>
          <Link to={`/video/${idx + 1}`}>{idx + 1} </Link>
        </li>
      );
    }

    return (
      <div style={{backgroundColor: '#eee'}}>
        <hr/>
        <nav style={{margin: '0 auto', textAlign: 'center'}}>
          <ul className="pagination pagination-lg">
            {this.makePrev()}
            {pagesNode}
            {this.makeNext()}
          </ul>
        </nav>
      </div>
    );
  }

  makePrev = () => {
    if (this.props.current > 1) {
      return (
        <li>
          <Link to={`/video/${this.props.current - 1}`} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
      );
    }
    return (
      <li className="disabled">
        <span aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </span>
      </li>
    );
  }

  makeNext = () => {
    if (this.props.current < this.totalPages()) {
      return (
        <li>
          <Link to={`/video/${this.props.current + 1}`} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      );
    }
    return (
      <li className="disabled">
        <span aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </span>
      </li>
    );
  }

  totalPages = () => {
    return Math.ceil(this.props.max / this.props.perPage);
  }

  /**
   * render renders Pagination
   */
  render() {
    if (this.props.max > this.props.perPage) {
      return this.makePagination();
    }
    return null;
  }
}
