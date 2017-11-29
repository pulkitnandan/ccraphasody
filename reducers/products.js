import { FETCH_PRODUCTS } from '../types/products';

const initialState = {
  products: []
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
      default: return state;
  }
}
