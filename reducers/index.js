import { combineReducers } from 'redux';
import auth from './auth';
import products from './products';
import utils from './utils';

export default combineReducers({
  auth,
  products,
  utils
});
