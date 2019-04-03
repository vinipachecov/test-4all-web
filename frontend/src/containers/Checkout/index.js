import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Checkout.module.css';
import Header from '../../components/Navigation/Header';
import StoreCountdown from '../../components/UI/StoreCountdown';
import OrderCheckoutBox from '../../components/UI/OrderCheckoutBox';
import * as cartActions from '../../store/actions/cartActions';

class Checkout extends Component {
  render() {
    const { cartItems, addItem, removeItem } = this.props;
    return (
      <div className={classes.container}>
        <Header
          left={<i className="fas fa-chevron-left" />}
        />
        <h1>Finalizar Pedido</h1>
        <StoreCountdown navigation={this.props.history} />
        <div className={classes.itemReviewText}>Revise os seus itens</div>
        <OrderCheckoutBox items={cartItems} onAddItem={addItem} onRemoveItem={removeItem} />
        <button className={classes.checkoutButton} type="button" onClick={() => console.log('teste')}>FINALIZAR COMPRA</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartData.cartItems,
});

const mapDispatchToProps = {
  addItem: cartActions.addItemToCart,
  removeItem: cartActions.removeItemFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
