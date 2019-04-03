import React from 'react';
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

export default BoxItemButton;
