import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Video, Pagination } from 'components';

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
      return <Video removeVideo={this.removeVideo} id={video.id} key={video.id} video={video}/>;
    });
    return nodes;
  }

  getCurrentPage = () => {
    return (this.props.params && this.props.params.page) ? parseInt(this.props.params.page, 10) : 1;
  }

  removeVideo = (id) => {
    const videos = JSON.parse(localStorage.getItem('videos'));
    const newVideos = videos.filter((item) => !(item.id === id));
    localStorage.setItem('videos', JSON.stringify(newVideos));
    this.forceUpdate();
  }

  countVideos = () => {
    if (localStorage.getItem('videos') === null) {
      return 0;
    }
    const videos = JSON.parse(localStorage.getItem('videos'));
    return videos.length;
  }

  noVideos = () => {
    return (
      <div className="jumbotron">
        <h1>No videos, yet...</h1>
        <p>Sorry, you don't have any videos here. Maybe you'll add some?</p>
        <p>
          <Link to="/new" className="btn btn-success btn-lg">
            Add Video
            {' '}
            <span className="glyphicon glyphicon-menu-right" style={{top: 3}}></span>
          </Link>
        </p>
      </div>
    );
  }

  /**
   * render renders Videos
   */
  render() {
    return (
      <div>
        {this.countVideos() > 0 &&
        <h1>List of videos <span className="badge">{this.countVideos()}</span></h1>}

        {!this.countVideos() && this.noVideos()}

        {this.getVideos()}
        <Pagination perPage={videosPerPage} current={this.getCurrentPage()} max={this.countVideos()}/>
      </div>
    );
  }
}
