import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export const Modal = ({ largeImage, altTags, closeModal }) => {
  return ReactDOM.createPortal(
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={largeImage} alt={altTags} />
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

Modal.propTypes = {
  largeImage: PropTypes.string,
  altTags: PropTypes.string,
  closeModal: PropTypes.func,
};
