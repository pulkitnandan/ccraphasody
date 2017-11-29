import { SET_CURRENT_USER } from '../types/auth';
import isEmpty from 'lodash/isEmpty'

const initialState = {
  isAuthenticated: false,
  user: {},
  sessionId: '',

};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
        sessionId: action.sessionId
      };
      default: return state;
  }
}
