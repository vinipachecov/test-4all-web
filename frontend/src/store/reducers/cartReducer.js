import * as actionTypes from '../actions/actionTypes';

const initialState = {
  categoryList: [],
  productList: [],
  cartItems: [],
  loading: false,
};


function onUpdateCartList(state, product, operation) {
  const hasProduct = state.cartItems.filter(item => item.id === product.id);
  if (hasProduct.length > 0) {
    const newCartList = [...state.cartItems].map((item) => {
      if (item.id === product.id) {
        if (operation === '+') {
          return { ...item, quantity: item.quantity + 1 };
        }
        // retira item
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    return { ...state, cartItems: newCartList };
  }
  return { ...state, cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      return onUpdateCartList(state, action.item, '+');
    case actionTypes.REMOVE_ITEM_FROM_CART:
      return onUpdateCartList(state, action.item, '-');
    case actionTypes.RECEIVED_CATEGORIES:
      return { ...state, categoryList: [{ id: -1, name: 'Selecione uma categoria' }, ...action.categories] };
    case actionTypes.PRODUCTS_RECEIVED:
      return { ...state, productList: action.products };
    default:
      return state;
  }
};
