import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';

const Modal = ({ children }) => (
  <div className={classes.backDrop}>
    <div className={classes.modal}>
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
