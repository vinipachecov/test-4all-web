import * as actionTypes from './actionTypes';

export const addItemToCart = item => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  item,
});


export const removeItemFromCart = item => ({
  type: actionTypes.REMOVE_ITEM_FROM_CART,
  item,
});


export const getProductList = categoryId => ({
  type: actionTypes.GET_PRODUCT_FROM_CATEGORY,
  categoryId,
});

export const getCategories = () => ({
  type: actionTypes.GET_CATEGORIES,
});

export const categoriesReceived = categories => ({
  type: actionTypes.RECEIVED_CATEGORIES,
  categories,
});

export const productsReceived = products => ({
  type: actionTypes.PRODUCTS_RECEIVED,
  products,
});

export const finishOrder = () => ({
  type: actionTypes.FINISH_ORDER,
});
