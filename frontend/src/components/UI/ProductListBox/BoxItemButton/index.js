import React from 'react';
import PropTypes from 'prop-types';
import classes from './BoxItemButton.module.css';

const BoxItemButton = ({ onClick, product }) => (
  <button
    className={classes.button}
    type="button"
    onClick={() => onClick(product)}
  >
  Adicionar no carrinho
  </button>
);


BoxItemButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    idCategory: PropTypes.number,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};


export default BoxItemButton;
