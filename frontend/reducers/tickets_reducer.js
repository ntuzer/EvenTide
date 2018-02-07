import merge from 'lodash/merge';

import {
  RECEIVE_TICKET,
} from '../actions/ticket_actions';

const ticketsReducer = (preloadedState = {}, action) => {
  Object.freeze(preloadedState);
  let newState;
  switch (action.type) {
    case RECEIVE_TICKET:
      return merge({}, preloadedState, {[action.id]: action});
    default:
      return preloadedState;
  }
};

export default ticketsReducer;
