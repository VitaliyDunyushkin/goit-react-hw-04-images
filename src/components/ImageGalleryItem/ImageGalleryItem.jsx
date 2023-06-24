import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  id,
  url,
  title,
  urlForModal,
  onClick,
}) {
  return (
    <li
      key={id}
      className={css.ImageGalleryItem}
      onClick={() => onClick(urlForModal, title, id)}
    >
      <img className={css.ImageGalleryItemImage} src={url} alt={title} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  urlForModal: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
