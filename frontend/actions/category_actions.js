import * as CatAPI from '../util/categories_api_util';

export const RECEIVE_EVENTS_CATEGORIES = 'RECEIVE_EVENTS_CATEGORIES';
export const RECEIVE_CATEGORY_ERRORS = 'RECEIVE_CATEGORY_ERRORS';

const receiveCategories = catEvents => {
  return {
    type: RECEIVE_EVENTS_CATEGORIES,
    catEvents,
  };
};

export const receiveErrors = errors => {
  return {
  type: RECEIVE_CATEGORY_ERRORS,
  errors
  };
};

export const fetchEventsByCategory = id => dispatch => {
  return CatAPI.fetchEventsByCategory().then(events => (
    dispatch(receiveCategories(events))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};
