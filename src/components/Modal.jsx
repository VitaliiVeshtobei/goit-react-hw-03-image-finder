import React from 'react';
import ReactDOM from 'react-dom';

// export const Modal = ({ largeImage, altTags, closeModal }) => {

//   return (
//     <div className="Overlay" onClick={closeModal}>
//       <div className="Modal">
//         <img src={largeImage} alt={altTags} />
//       </div>
//     </div>
//   );
// };

export const Modal = ({ largeImage, altTags, closeModal }) => {
  return ReactDOM.createPortal(
    <div className="Overlay" onClick={closeModal} onKeyDown={closeModal}>
      <div className="Modal">
        <img src={largeImage} alt={altTags} />
      </div>
    </div>,
    document.querySelector('#modal')
  );
};
