import { combineReducers } from 'redux';

// import entities from './entities_reducer';
// import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import albums from './albums_reducer';

const rootReducer = combineReducers({
  session,
  albums,
  errors,
});

export default rootReducer;

// const rootReducer = () => {
//   console.log('rootReducer');
//   return combineReducers({
//     session,
//     errors,
//   });
// };
// export default rootReducer;
