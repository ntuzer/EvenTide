import { combineReducers } from 'redux';

// import entities from './entities_reducer';
// import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import events from './events_reducer';
import tickets from './tickets_reducer';
import bookmarks from './bookmarks_reducer';
import categories from './categories_reducer';

const rootReducer = combineReducers({
  session,
  events,
  tickets,
  bookmarks,
  categories,
  errors,
});

export default rootReducer;
