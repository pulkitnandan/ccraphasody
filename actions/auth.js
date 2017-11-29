import { getAuthToken } from '../services/auth';
import {saveCookie, deleteAllCookies} from '../plugins/cookieman'
import { SET_CURRENT_USER } from '../types/auth';


export function setCurrentUser({user, sessionId}) {
  return {
    type: SET_CURRENT_USER,
    user,
    sessionId
  };
}

export function logout() {
  return dispatch => {
    deleteAllCookies();
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return getAuthToken(data.username, data.password).then(res => {

      if(res.error_code == undefined){
          const sessionId = res.sessionId;
          saveCookie('sessionId', sessionId);
          saveCookie('user', data.username);

          dispatch(setCurrentUser({user: data.username, sessionId: sessionId}));
      } else {
          return {error:res.error_msg}
      }

    });
  }
}
