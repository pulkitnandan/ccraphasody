import { urls, post } from '../plugins/api'
import md5 from '../plugins/md5'


const getAuthToken = function(email, password){
  return (post(urls.userLogin(), { "password": md5(password), "username": email}))

}

export { getAuthToken }
