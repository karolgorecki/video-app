import React, { Component, PropTypes } from 'react';

const initialState = {
  data: {
    id: '',
    title: '',
    thumbnail: '',
    image: '',
    description: '',
    idx: -1
  },
  sent: false,
  lastTitle: ''
};
/**
 * Edit page for single video
 */
export default class Edit extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state = initialState;

  componentWillMount = () => {
    if (localStorage.getItem('videos') === null) {
      this.context.router.replace('/');
    }

    const videos = JSON.parse(localStorage.getItem('videos'));
    let foundVideo = false;

    videos.map((vid, idx) => {
      if (vid.id === this.props.params.id) {
        foundVideo = true;
        this.setState({...initialState, data: {
          id: vid.id,
          title: vid.title,
          thumbnail: vid.thumbnail,
          image: vid.image,
          description: vid.description,
          idx
        }});
      }
    });

    if (!foundVideo) {
      this.context.router.replace('/');
    }
  }

  handleSubmit = (evt) => {
    const videoData = {
      id: this.state.data.id,
      title: this.state.data.title,
      thumbnail: this.state.data.thumbnail,
      image: this.state.data.image,
      description: this.state.data.description
    };

    evt.preventDefault();
    this.saveVideo(videoData);
    this.setState({...this.state, sent: true, lastTitle: videoData.title});
  }

  saveVideo = (video) => {
    const videos = JSON.parse(localStorage.getItem('videos'));
    videos[this.state.data.idx] = video;
    localStorage.setItem('videos', JSON.stringify(videos));
  }

  showSuccess = (name) => {
    return (
      <div className="alert alert-success" role="alert">
        Edited video <strong>{name}</strong>!
      </div>
    );
  }

  changeHanlder = (field, evt) => {
    this.setState({...this.state, data: {...this.state.data, [field]: evt.target.value}});
  }

  /**
   * render renders Edit
   */
  render() {
    const styles = require('containers/New/New.scss');
    return (
      <div>
        {this.state.sent && this.showSuccess(this.state.lastTitle)}
        <h1 className={styles.heading}>Edit Video</h1>
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
