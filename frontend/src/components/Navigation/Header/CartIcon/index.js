import React from 'react';
import classes from './cartIcon.module.css';

const CartIcon = ({ quantity }) => (
  <div className={classes.cart}>
    <i className="fas fa-shopping-cart " />
    <div className={classes.cartQuantity}>{quantity}</div>
  </div>
);

export default CartIcon;
