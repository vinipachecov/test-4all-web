import { all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as cartSagas from './cartSagas';

/**
 * Recebe as sagas(funções que tratam async)
 */
export default function* watchcartSagas() {
  yield all([
    takeEvery(actionTypes.GET_CATEGORIES, cartSagas.getCategoriesSaga),
    takeEvery(actionTypes.GET_PRODUCT_FROM_CATEGORY, cartSagas.getProductListSaga),
  ]);
}
