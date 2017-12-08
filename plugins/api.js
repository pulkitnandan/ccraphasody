import 'isomorphic-unfetch'
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


const get = async function(url) {

  const res =  await fetch(config.api.host + url);
  return  await res.json();
}

const post = async function(url, data) {
  const res = await fetch(config.api.host + url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, // Add authentication and other headers here
    body: JSON.stringify(
      data
    )
  })

  return  await res.json();
}


export {
  urls,
  get,
  post
};
