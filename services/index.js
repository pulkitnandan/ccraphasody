import {urls, get, putAuth} from '../plugins/api'
import {getProducts} from './products'

class apiWrapper{

  constructor(headers) {
    this.headers = headers
  }

  getProducts(skip , limit){
    return getProducts(this.headers, skip, limit)
  }
}

export default apiWrapper
