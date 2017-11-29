import axios from 'axios'
import {info, debug} from './logger'
import config from '../config'
// var Marketcloud = require('marketcloud-node');
//
// var marketcloud = new Marketcloud.Client({
//         public_key : '91380338-abbb-4d29-b3b8-4ba72c4734c0',
//         secret_key : '-iNjje8SCB4kS-TLzw41FJbjVXi8cQNnxvC-ZnvVzYo-'
//     })

const urls = {
  userLoginApiURL: () => {
    return `/user/auth`
  },

  videosApiURL: (sessionId, skip = 0, limit = 10) => {
    return `/videos?sessionId=${sessionId}&skip=${skip}&limit=${limit}`
  }
}

// Axois configuration
const request = axios.create({
  baseURL: config.api.host,
  headers: {
    'content-type': 'application/json'
  }
});

const grequest = axios.create({
  headers: {
    'content-type': 'application/json'
  }
});

// error handling
const axiosResponseTransform = function(url) {
  return function(response) {
    info(`pubhouse-api: response status-> ${response.status} ${response.statusText}: ${url}`)

    debug(response.data)
    return response.data
  }
}

const get = async function(url, header) {
//  const authKey = (header) ? `${config.api.publicKey}:${header}` : config.api.publicKey;
  //request.defaults.headers.common['Authorization'] = authKey

  return request.get(url).then(axiosResponseTransform(url))
}

const getg = async function(url) {
  return grequest.get(url).then(axiosResponseTransform(url))
}

const post = async function(url, data) {
  return request.post(url, data).then(axiosResponseTransform(url))
}

const postg = async function(url, data) {
  return grequest.post(url, data).then(axiosResponseTransform(url))
}

const putAuth = async function(url, header, data) {
  request.defaults.headers.common['Authorization'] = header
  return request.put(url, data).then(axiosResponseTransform(url))
}

export {
  urls,
  get,
  post,
  putAuth,
  getg,
  postg
};
