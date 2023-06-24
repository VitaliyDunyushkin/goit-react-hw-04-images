import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlePressESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressESC);
  }

  handlePressESC = e => {
    if (e.code === 'Escape') this.props.onClick();
  };

  render() {
    const {
      modalContent: { largeImageURL, title, id },
      onClick,
    } = this.props;

    return (
      <div className={css.overlay} onClick={() => onClick()}>
        <div className={css.modal} key={id}>
          <img src={largeImageURL} alt={title} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  modalContent: PropTypes.exact({
    largeImageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
