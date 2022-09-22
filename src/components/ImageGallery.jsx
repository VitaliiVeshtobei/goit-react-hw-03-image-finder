import React from 'react';
import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import axios from 'axios';

export class ImageGallery extends Component {
  state = {
    dataGallery: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;
    if (prevName !== nextName) {
      const BASE_URL = 'https://pixabay.com/api/';
      const params = {
        key: '29558697-85a489dc53885da2ee650bf34',
        q: `${nextName}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: `${1}`,
        per_page: '12',
      };

      axios(BASE_URL, { params }).then(res => {
        this.setState({ dataGallery: res.data.hits });
      });
    }
  }
  render() {
    return (
      <ul className="ImageGallery">
        {this.state.dataGallery && (
          <ImageGalleryItem data={this.state.dataGallery} />
        )}
      </ul>
    );
  }
}
