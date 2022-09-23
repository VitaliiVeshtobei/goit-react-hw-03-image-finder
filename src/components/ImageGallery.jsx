import React from 'react';
import { Component } from 'react';
import { toast } from 'react-toastify';
import { ImageGalleryItem } from './ImageGalleryItem';
import { LoadMore } from './LoadMore';
import { getApi } from './serviceApi';

export class ImageGallery extends Component {
  state = {
    dataGallery: null,
    page: 1,
    visibleLoadMore: false,
  };
  async componentDidUpdate(prevProps, prevState) {
    const prevStatePage = prevState.page;
    const nextStatePage = this.state.page;
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;
    if (prevName !== nextName) {
      this.setState({ page: 1, dataGallery: [], visibleLoadMore: false });
    }

    if (prevName !== nextName || prevStatePage !== nextStatePage) {
      try {
        const response = await getApi(nextStatePage, nextName);
        if (response.hits.length === 0) {
          toast.error('No such pictures!');
          this.setState({ visibleLoadMore: false });
        }

        if (response.hits.length > 11) this.setState({ visibleLoadMore: true });
        if (!this.state.dataGallery) {
          return this.setState({ dataGallery: response.hits });
        }
        this.setState(prevState => {
          return { dataGallery: [...prevState.dataGallery, ...response.hits] };
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  }
  loadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    return (
      <>
        <ul className="ImageGallery">
          {this.state.dataGallery && (
            <ImageGalleryItem data={this.state.dataGallery} />
          )}
        </ul>
        {this.state.visibleLoadMore && (
          <LoadMore onClickLoadMore={this.loadMoreClick} />
        )}
      </>
    );
  }
}
