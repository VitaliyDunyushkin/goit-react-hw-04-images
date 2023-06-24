import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export default function Button({ handleButton }) {
  return (
    <button type="submit" className={css.Button} onClick={handleButton}>
      Load more
    </button>
  );
}

Button.propTypes = { handleButton: PropTypes.func.isRequired };
