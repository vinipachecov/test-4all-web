import React from 'react';
import classes from './OrderCheckoutBox.module.css';
import CheckoutItem from './CheckoutItem';

const OrderCheckoutBox = ({ items, onAddItem, onRemoveItem }) => {
  const total = items.reduce((acc, cur) => {
    acc += (cur.price * cur.quantity);
    return acc;
  }, 0);
  return (
    <div className={classes.OrderCheckoutBox}>
      {
      items.length > 0
        ? items.map(item => <CheckoutItem onAddItem={onAddItem} onRemoveItem={onRemoveItem} item={item} />)
        : <div>Seu carrinho de compras está vazio!</div>
    }
      {
      items.length > 0
        ? (
          <div className={classes.OrderCheckoutTotal}>
            <div>Total</div>
            <div>{total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
          </div>
        )
        : null
    }
    </div>
  );
};

export default OrderCheckoutBox;
