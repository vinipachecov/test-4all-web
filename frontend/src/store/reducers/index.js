import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

export default combineReducers({
  cartData: cartReducer,
});
