import {
  RECEIVE_CATEGORY_ERRORS
} from '../actions/category_actions';

export default (state = [], action) => {
  // console.log('events error reducer', action);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORY_ERRORS:
      return state;
    default:
      return state;
  }
};
