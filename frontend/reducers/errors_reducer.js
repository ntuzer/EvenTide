import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import events from './events_errors_reducer';
import tickets from './tickets_errors_reducer';
import bookmarks from './bookmarks_errors_reducer';
import categories from './categories_error_reducer';

export default combineReducers({
  session,
  events,
  tickets,
  bookmarks,
  categories,
});
