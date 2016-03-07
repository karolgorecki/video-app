import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Video } from 'components';

const videosPerPage = 5;
/**
 * Videos is a page container for displaying all videos
 */
export default class Videos extends Component {
  static propTypes = {
    params: PropTypes.object
  };

  getVideos = () => {
    if (!this.countVideos()) {
      return null;
    }

    const start = (this.getCurrentPage() - 1) * videosPerPage;
    const end = start + videosPerPage;
    const videos = JSON.parse(localStorage.getItem('videos'));
    const nodes = videos.slice(start, end).map((video) => {
      return <Video key={video.id} video={video}/>;
    });
    return nodes;
  }

  getCurrentPage = () => {
    return this.props.params.page ? parseInt(this.props.params.page, 10) : 1;
  }

  totalPages = () => {
    return Math.ceil(this.countVideos() / videosPerPage);
  }

  makePagination = () => {
    const pages = this.totalPages();
    const currentPage = this.getCurrentPage();

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
      <nav style={{margin: '0 auto', textAlign: 'center'}}>
        <ul className="pagination pagination-lg">
          {this.makePrev()}
          {pagesNode}
          {this.makeNext()}
        </ul>
      </nav>
    );
  }

  makePrev = () => {
    if (this.getCurrentPage() > 1) {
      return (
        <li>
          <Link to={`/video/${this.getCurrentPage() - 1}`} aria-label="Previous">
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
    if (this.getCurrentPage() < this.totalPages()) {
      return (
        <li>
          <Link to={`/video/${this.getCurrentPage() + 1}`} aria-label="Next">
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

  countVideos = () => {
    if (localStorage.getItem('videos') === null) {
      return 0;
    }
    const videos = JSON.parse(localStorage.getItem('videos'));
    return videos.length;
  }

  /**
   * render renders Videos
   */
  render() {
    return (
      <div>
        <h1>List of videos {(this.countVideos() > 0) && <span className="badge">{this.countVideos()}</span>}</h1>
        {!this.countVideos() && <div>Sorry, no videos</div>}

        {this.getVideos()}
        {(this.countVideos() > videosPerPage) && this.makePagination()}
      </div>
    );
  }
}
