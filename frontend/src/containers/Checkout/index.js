import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Checkout.module.css';
import Header from '../../components/Navigation/Header';
import StoreCountdown from '../../components/UI/StoreCountdown';
import OrderCheckoutBox from '../../components/UI/OrderCheckoutBox';
import * as cartActions from '../../store/actions/cartActions';
import Modal from '../../components/UI/Modal';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      finishOrder: false,
    };
  }

  onNavigateBack() {
    const { history } = this.props;
    history.push('/');
  }

  onFinishOrder() {
    const { finishOrder, history } = this.props;
    finishOrder();
    history.push('/');
  }

  onShowFinishOrderModal() {
    this.setState({ finishOrder: true });
  }

  render() {
    const { finishOrder } = this.state;
    const {
      cartItems, addItem, removeItem, history,
    } = this.props;
    return (
      <div className={classes.container}>
        <Header
          left={<i className="fas fa-chevron-left" />}
        />
        { cartItems.length === 0
          ? (
            <Modal>
              <p style={{ textAlign: 'center' }}>Seu carrinho está vazio, aperte Ok para voltar na tela de produtos</p>
              <button type="button" className={classes.modalButton} onClick={() => this.onNavigateBack()}>Ok</button>
            </Modal>
          ) : null}
        {
          finishOrder
            ? (
              <Modal>
                <i className="fas fa-check-circle fa-2x" />
                <p>Seu pedido foi realizado com sucesso!</p>
                <button type="button" className={classes.modalButton} onClick={() => this.onFinishOrder()}>Ok</button>
              </Modal>
            )
            : null
        }
        <h1>Finalizar Pedido</h1>
        <StoreCountdown navigation={history} finishOrder={() => this.onFinishOrder()} />
        <div className={classes.itemReviewText}>Revise os seus itens</div>
        <OrderCheckoutBox items={cartItems} onAddItem={addItem} onRemoveItem={removeItem} />
        <button className={classes.checkoutButton} type="button" onClick={() => this.onShowFinishOrderModal()}>FINALIZAR COMPRA</button>
      </div>
    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    idCategory: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    pop: PropTypes.func,
  }).isRequired,
  finishOrder: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cartItems: state.cartData.cartItems,
});

const mapDispatchToProps = {
  addItem: cartActions.addItemToCart,
  removeItem: cartActions.removeItemFromCart,
  finishOrder: cartActions.finishOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
