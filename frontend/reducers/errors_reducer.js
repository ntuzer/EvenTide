import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import events from './events_errors_reducer';

export default combineReducers({
  session,
  events,
});
