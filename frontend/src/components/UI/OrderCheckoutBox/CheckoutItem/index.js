import React from 'react';
import classes from './CheckoutItem.module.css';

const CheckoutItem = ({
  item, onAddItem, onRemoveItem,
}) => (
  <div className={classes.CheckoutItem}>
    <div>
      <div className={classes.iconContainer} onClick={() => onRemoveItem(item)}>
        <i className="fas fa-minus" />
      </div>
      {item.quantity}
      <div className={classes.iconContainer} onClick={() => onAddItem(item)}>
        <i className="fas fa-plus" />
      </div>
    </div>
    <div className={classes.productName}>{item.name}</div>
    <div className={classes.productPrice}>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
  </div>
);

export default CheckoutItem;
