import { put } from 'redux-saga/effects';
import * as cartActions from '../actions/cartActions';

export function* getCategoriesSaga() {
  const response = yield fetch('http://localhost:3003/category/list');
  const data = yield response.json();
  console.log('categories = ', data);
  yield put(cartActions.categoriesReceived(data.categorias));
}

export function* getProductListSaga(action) {
  const { categoryId } = action;
  const response = yield fetch(`http://localhost:3003/category/${categoryId}/productList`);
  const data = yield response.json();
  yield put(cartActions.productsReceived(data.products));
}
