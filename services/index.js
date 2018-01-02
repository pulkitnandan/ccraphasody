import {urls, get, putAuth} from '../plugins/api'
import {getProducts, getProduct} from './products'

class apiWrapper{

  constructor(headers) {
    this.headers = headers
  }

  getProducts = (skip , limit) => getProducts(this.headers, skip, limit)
  getProduct = (videoId) => getProduct(this.headers, videoId)
  
}

export default apiWrapper
