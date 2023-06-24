import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

export default function ImageGallery({ gallery, onClick }) {
  return (
    <ul className={css.ImageGallery}>
      {gallery.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            url={webformatURL}
            title={tags}
            urlForModal={largeImageURL}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  onClick: PropTypes.func.isRequired,
};
