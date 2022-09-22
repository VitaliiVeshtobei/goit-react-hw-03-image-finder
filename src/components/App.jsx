import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { React, Component } from 'react';
import { SearchBar } from './SearchBar';
import { ImageGallery } from './ImageGallery';

import { getApi } from './serviceApi';
export class App extends Component {
  state = {
    pictureName: '',
    gallery: null,
    page: 1,
  };

  handlePictureName = name => {
    this.setState({ pictureName: name });
  };
  addGallery = async () => {
    getApi().then(data => {
      this.setState({ gallery: data.hits });
    });
  };

  render() {
    return (
      <div>
        <ToastContainer
        //
        />
        <SearchBar onSubmit={this.handlePictureName} />
        <ImageGallery pictureName={this.state.pictureName} />
        {/* <Loader />
        <Button />
        <Modal />   */}
      </div>
    );
  }
}
