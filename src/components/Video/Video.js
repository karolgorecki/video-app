import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

const modalStyles = {
  overlay: {
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(86, 170, 225, 0.8)'
  },
  content: {
    padding: 20,
    border: '3px solid #56a9e2'
  }
};

/**
 * Video returns a signle video node
 */
export default class Video extends Component {
  static propTypes = {
    video: PropTypes.object.isRequired
  };

  state = {
    modal: false
  }

  openModal = () => {
    this.setState({modal: true});
  }

  closeModal = () => {
    this.setState({modal: false});
  }

  /**
   * render renders Video
   */
  render() {
    const styles = require('./Video.scss');
    return (
      <div className="row">
        <Modal style={modalStyles} isOpen={this.state.modal} onRequestClose={this.closeModal}>
          <span onClick={this.closeModal} className={styles.close}>
            &times;
          </span>
          <img className={styles.img} src={this.props.video.image} alt="image" />
        </Modal>
        <hr/>
        <div className="col-xs-4 col-md-4">
          <a href="#" onClick={this.openModal}>
            <img style={{width: '100%', height: 'auto', maxWidth: '100%'}} src={this.props.video.thumbnail} alt={this.props.video.title} />
          </a>
        </div>
        <div className="col-xs-8 col-md-8">
          <h4 className="media-heading">{this.props.video.title}</h4>
          <p>{this.props.video.description}</p>
        </div>
      </div>
    );
  }
}
