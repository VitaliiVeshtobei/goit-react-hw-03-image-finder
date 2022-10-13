import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class Modal extends Component {
  keydown = evt => {
    if (evt.key === 'Escape') {
      this.props.closeModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.keydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydown);
  }
  render() {
    const { largeImage, altTags, closeModal } = this.props;

    return ReactDOM.createPortal(
      <div
        className="Overlay"
        onClick={closeModal}
        tabIndex={0}
        onKeyDown={this.keydown}
      >
        <div className="Modal">
          <img src={largeImage} alt={altTags} />
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }
}

Modal.propTypes = {
  largeImage: PropTypes.string,
  altTags: PropTypes.string,
  closeModal: PropTypes.func,
};
