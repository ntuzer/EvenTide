import merge from 'lodash/merge';

import {
  RECEIVE_BOOKMARKS,
  RECEIVE_BOOKMARK,
} from '../actions/bookmark_actions';

const bookmarksReducer = (preloadedState = {}, action) => {
  Object.freeze(preloadedState);
  let newState;
  switch (action.type) {
    case RECEIVE_BOOKMARKS:
      return merge({}, preloadedState, action.bookmarks);
    case RECEIVE_BOOKMARK:
      return merge({}, preloadedState, {[action.id]: action.bookmark});
    default:
      return preloadedState;
  }
};

export default bookmarksReducer;
