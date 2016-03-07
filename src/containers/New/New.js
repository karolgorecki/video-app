import React, { Component } from 'react';

const initialState = {
  data: {
    id: '',
    title: '',
    thumbnail: '',
    image: '',
    description: ''
  },
  sent: false,
  lastTitle: ''
};

/**
 * New is a container that holds form for creating new video
 */
export default class New extends Component {
  state = initialState;

  handleSubmit = (evt) => {
    const id = (new Date()).getTime() + '';
    const videoData = {
      ...this.state.data,
      id
    };
    evt.preventDefault();
    this.saveVideo(videoData);
    this.setState({...initialState, sent: true, lastTitle: videoData.title});
  }

  saveVideo = (video) => {
    if (localStorage.getItem('videos') === null) {
      localStorage.setItem('videos', JSON.stringify([video]));
      return;
    }
    const videos = JSON.parse(localStorage.getItem('videos'));
    localStorage.setItem('videos', JSON.stringify([video, ...videos]));
  }

  showSuccess = (name) => {
    return (
      <div className="alert alert-success" role="alert">
        Added video <strong>{name}</strong>!
      </div>
    );
  }

  changeHanlder = (field, evt) => {
    this.setState({...this.state, data: {...this.state.data, [field]: evt.target.value}});
  }

  /**
   * render render New
   */
  render() {
    const styles = require('./New.scss');
    return (
      <div>
        {this.state.sent && this.showSuccess(this.state.lastTitle)}
        <h1 className={styles.heading}>Add new video</h1>
        <div className={styles.formWrap}>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" value={this.state.data.title} onChange={this.changeHanlder.bind(this, 'title')} className="form-control input-lg" id="title" required placeholder="Title"/>
            </div>
            <div className="form-group">
              <label htmlFor="thumbnail">Thumbnail URL</label>
              <input type="url" value={this.state.data.thumbnail} onChange={this.changeHanlder.bind(this, 'thumbnail')} className="form-control input-lg" id="thumbnail" required placeholder="Thumbnail URL"/>
            </div>
            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input type="url" value={this.state.data.image} onChange={this.changeHanlder.bind(this, 'image')} className="form-control input-lg" id="image" required placeholder="Image URL"/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" value={this.state.data.description} onChange={this.changeHanlder.bind(this, 'description')} className="form-control" required rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-default btn-lg">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
