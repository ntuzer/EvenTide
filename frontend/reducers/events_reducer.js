import merge from 'lodash/merge';

import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  RECEIVE_MY_EVENTS,
} from '../actions/event_actions';

const eventsReducer = (preloadedState = {}, action) => {
  // console.log('events reducer');
  Object.freeze(preloadedState);
  let newState;
  switch (action.type) {
    case RECEIVE_EVENTS:
      // console.log("RED RECEIVE_EVENTS", action);
      newState = merge({}, action.events);
      return newState;
    case RECEIVE_EVENT:
      // console.log("RED RECEIVE_EVENT", action);
      newState = merge(
        {},
        preloadedState,
        {[action.event.id]: action.event}
      );
      return newState;
    // case RECEIVE_MY_EVENTS:
    default:
      return preloadedState;
  }
};

export default eventsReducer;
