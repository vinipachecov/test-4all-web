import React from 'react';
import PropTypes from 'prop-types';
import classes from './cartIcon.module.css';

const CartIcon = ({ quantity }) => (
  <div className={classes.cart}>
    <i className="fas fa-shopping-cart " />
    <div className={classes.cartQuantity}>{quantity}</div>
  </div>
);

CartIcon.defaultProps = {
  quantity: 0,
};

CartIcon.propTypes = {
  quantity: PropTypes.number,
};

export default CartIcon;
