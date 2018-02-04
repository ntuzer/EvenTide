import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  console.log('sessionReducer');
  console.log('sR preloadedState', state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = {currentUser: null};
      newState.currentUser = action.currentUser;
      // console.log('state: ', state);
      // console.log('act: ', action);
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
