import { urls, post, get } from '../plugins/api'

export const getProducts = function(sessionId, skip, limit){
  return (get(urls.videos(sessionId, skip, limit)))
}

export const getProduct = function(sessionId, videoId){
  return (get(urls.video(sessionId, videoId)))
}
