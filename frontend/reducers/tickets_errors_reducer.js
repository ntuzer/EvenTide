import {
  RECEIVE_TICKET_ERRORS,
} from '../actions/ticket_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TICKET_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
