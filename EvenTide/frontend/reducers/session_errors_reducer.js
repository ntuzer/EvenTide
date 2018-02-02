import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

export default (state = [], action) => {
  console.log('session error reducer');
  Object.freeze(state);
  console.log("action.type:",action.type);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      console.log("err red", action.errors);
      // if (action) {
      //   console.log('innnnnnn');
      //   return state;
      // }
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return null;
    default:
      return state;
  }
};
