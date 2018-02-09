import merge from 'lodash/merge';

import {
  RECEIVE_EVENTS_CATEGORIES
} from '../actions/category_actions';

const categoriesReducer = (preloadedState = {}, action) => {
  Object.freeze(preloadedState);
  let newState;
  switch (action.type) {
    case RECEIVE_EVENTS_CATEGORIES:
      return merge({}, preloadedState, action.catEvents);
    default:
      return preloadedState;
  }
};

export default categoriesReducer;
