import { getProducts } from '../services/products';
import { FETCH_PRODUCTS } from '../types/products';


export function setProducts({products}) {
  return {
    type: FETCH_PRODUCTS,
    products
  };
}


export function login(data) {
  return dispatch => {
    return getProducts(data.sessionId, data.skip, data.limit).then(res => {
console.log(res);
      if(res.error_code == undefined){
        let products = [];
          dispatch(setProducts({products}));
      } else {
          return {error:res.error_msg}
      }

    });
  }
}
