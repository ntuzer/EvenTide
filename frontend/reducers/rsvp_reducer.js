import merge from 'lodash/merge';

import {
  RECEIVE_RSVPS,
  RECEIVE_RSVP_ERRORS,
} from '../actions/rsvp_actions';

const rsvpReducer = (preloadedState = {}, action) => {
  Object.freeze(preloadedState);
  let newState;
  switch (action.type) {
    case RECEIVE_RSVPS:
      newState = merge({}, action.rsvps);
      return newState;
    default:
      return preloadedState;
  }
};

export default rsvpReducer;
