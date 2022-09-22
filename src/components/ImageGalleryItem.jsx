import React from 'react';

export const ImageGalleryItem = pictures => {
  console.log(pictures);

  return pictures.data.map(picture => {
    return (
      <li className="ImageGalleryItem" key={picture.id}>
        <img
          className="ImageGalleryItem-image"
          src={picture.webformatURL}
          alt=""
        />
      </li>
    );
  });
};
