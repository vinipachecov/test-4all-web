import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './ProductListPage.module.css';
import Header from '../../components/Navigation/Header';
import Select from '../../components/UI/Select/select';
import ProductListBox from '../../components/UI/ProductListBox';
import * as cartActions from '../../store/actions/cartActions';


class ProductListPage extends Component {
  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  render() {
    const {
      categoryList, productList, getProductList, addItemToCart, quantity,
    } = this.props;
    return (
      <React.Fragment>
        <Header quantity={quantity} cartIcon />
        <div className={classes.container}>
          <Select
            items={categoryList}
            onClick={getProductList}
          />
          <ProductListBox
            data={productList}
            onClickItem={addItemToCart}
          />
        </div>
      </React.Fragment>
    );
  }
}

ProductListPage.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  getProductList: PropTypes.func.isRequired,
  productList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    idCategory: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  })).isRequired,
  categoryList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  quantity: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  quantity: state.cartData.cartItems.reduce((acc, cur) => {
    acc += cur.quantity;
    return acc;
  }, 0),
  cartItems: state.cartData.cartItems,
  categoryList: state.cartData.categoryList,
  productList: state.cartData.productList,
});

const mapDispatchToProps = {
  addItemToCart: cartActions.addItemToCart,
  removeItem: cartActions.removeItemFromCart,
  getProductList: cartActions.getProductList,
  getCategories: cartActions.getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
