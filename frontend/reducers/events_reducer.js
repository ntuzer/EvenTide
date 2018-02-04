import merge from 'lodash/merge';

import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  RECEIVE_MY_EVENTS,
} from '../actions/event_actions';

const eventsReducer = (preloadedState = {}, action) => {
  console.log('events reducer');
  console.log('eR preloadedState', preloadedState);
  Object.freeze(preloadedState);
  let newState;
  switch (action.type) {
    case RECEIVE_EVENTS:
      newState = merge({}, action.albums);
      return newState;
    case RECEIVE_EVENT:
      newState = merge(
        {},
        preloadedState,
        {[action.albums.id]: action.albums}
      );
      return newState;
    // case RECEIVE_MY_EVENTS:
    default:
      return preloadedState;
  }
};

export default eventsReducer;
