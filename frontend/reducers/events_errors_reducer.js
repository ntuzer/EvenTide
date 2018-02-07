import {
  RECEIVE_EVENT_ERRORS,
} from '../actions/event_actions';

export default (state = [], action) => {
  // console.log('events error reducer', action);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
