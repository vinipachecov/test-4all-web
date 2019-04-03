import React from 'react';
import PropTypes from 'prop-types';
import classes from './CheckoutItem.module.css';

const CheckoutItem = ({
  item, onAddItem, onRemoveItem,
}) => (
  <div className={classes.CheckoutItem}>
    <div>
      <button type="button" className={classes.iconContainer} onClick={() => onRemoveItem(item)}>
        <i className="fas fa-minus" />
      </button>
      {item.quantity}
      <button type="button" className={classes.iconContainer} onClick={() => onAddItem(item)}>
        <i className="fas fa-plus" />
      </button>
    </div>
    <div className={classes.productName}>{item.name}</div>
    <div className={classes.productPrice}>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
  </div>
);

CheckoutItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    idCategory: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  onAddItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default CheckoutItem;
