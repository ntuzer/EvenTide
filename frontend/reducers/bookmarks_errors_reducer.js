import {
  RECEIVE_BOOKMARK_ERRORS,
} from '../actions/bookmark_actions';

export default (state = [], action) => {
  // console.log('events error reducer', action);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKMARK_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
