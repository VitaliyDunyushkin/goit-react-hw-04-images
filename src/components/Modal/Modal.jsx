import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default function Modal({ onClick, modalContent }) {
  const handlePressESC = e => {
    if (e.code === 'Escape') onClick();
  };

  useEffect(() => {
    window.addEventListener('keydown', handlePressESC);

    return () => {
      window.removeEventListener('keydown', handlePressESC);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { largeImageURL, title, id } = modalContent;

  return (
    <div className={css.overlay} onClick={() => onClick()}>
      <div className={css.modal} key={id}>
        <img src={largeImageURL} alt={title} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  modalContent: PropTypes.exact({
    largeImageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
