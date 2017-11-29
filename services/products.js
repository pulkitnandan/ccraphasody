import { urls, post, get } from '../plugins/api'

const getProducts = function(sessionId, skip, limit){
  return (get(urls.videosApiURL(sessionId, skip, limit)))

}

export { getProducts }
