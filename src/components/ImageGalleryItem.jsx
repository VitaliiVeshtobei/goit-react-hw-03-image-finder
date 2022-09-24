import React from 'react';
import { Modal } from './Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { data } = this.props;
    return data.map(picture => {
      return (
        <li className="ImageGalleryItem" key={picture.id}>
          <img
            onClick={this.openModal}
            className="ImageGalleryItem-image"
            src={picture.webformatURL}
            alt=""
          />
          {this.state.isModalOpen && (
            <Modal
              largeImage={picture.largeImageURL}
              altTags={picture.tags}
              closeModal={this.closeModal}
            />
          )}
        </li>
      );
    });
  }
}
