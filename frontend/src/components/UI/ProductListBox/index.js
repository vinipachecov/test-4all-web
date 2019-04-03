import React from 'react';
import PropTypes from 'prop-types';
import classes from './ProductListBox.module.css';
import BoxItemButton from './BoxItemButton';

const ProductListBox = ({ data, onClickItem }) => (
  <React.Fragment>
    {
    data.length > 0
      ? (
        <div className={classes.boxContainer}>
          {
            data.map(product => (
              <div
                key={product.id}
                className={classes.boxItem}
              >
                <div className={classes.itemName}>
                  {product.name}
                </div>
                <BoxItemButton
                  onClick={onClickItem}
                  product={product}
                />
              </div>
            ))
         }
        </div>
      )
      : <div style={{ marginTop: '2%' }}>Oops, categoria sem produtos!</div>
  }
  </React.Fragment>
);

ProductListBox.propTypes = {
  onClickItem: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    idCategory: PropTypes.number,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  })).isRequired,
};


export default ProductListBox;
