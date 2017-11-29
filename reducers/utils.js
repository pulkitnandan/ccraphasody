import { TOGGLE_NAV } from '../types/auth';
import isEmpty from 'lodash/isEmpty'

const initialState = {
  toggle: false
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case TOGGLE_NAV:
      return {
        ...state,
        toggle: !action.toggle
      };
      default: return state;
  }
}
