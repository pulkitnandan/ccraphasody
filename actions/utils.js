import { TOGGLE_NAV } from '../types/utils';


export function toggleNav({toggle}) {
  return {
    type: TOGGLE_NAV,
    toggle
  };
}
