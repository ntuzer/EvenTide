import { combineReducers } from 'redux';

// import entities from './entities_reducer';
// import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import events from './events_reducer';
import tickets from './tickets_reducer';

const rootReducer = combineReducers({
  session,
  events,
  tickets,
  errors,
});

export default rootReducer;
