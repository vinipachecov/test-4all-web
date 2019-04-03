import React from 'react';
import PropTypes from 'prop-types';
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
        ? items.map(item => <CheckoutItem key={item.id} onAddItem={onAddItem} onRemoveItem={onRemoveItem} item={item} />)
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

OrderCheckoutBox.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    idCategory: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
  onAddItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default OrderCheckoutBox;
