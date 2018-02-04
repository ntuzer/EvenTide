import * as EventAPIUtil from '../util/session_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const RECEIVE_MY_EVENTS = 'RECEIVE_MY_EVENTS';


const receiveAllEvents = events => {
  console.log('action receiveEvents');
  return {
    type: RECEIVE_EVENTS,
    events
  };
};

const receiveMyEvents = events => {
  return {
    type: RECEIVE_MY_EVENTS,
    events
  };
};


const receiveSingleEvent = events => {
  console.log('action receiveEvents');
  return {
    type: RECEIVE_EVENTS,
    events
  };
};

const receiveErrors = errors => {
  console.log('action receiveErrors');
  return {
  type: RECEIVE_EVENT_ERRORS,
  errors
  };
};


export const fetchEvents = () => dispatch => {
  console.log('action fetchEvents');
  return EventAPIUtil.fetchEvents().then(events => (
    dispatch(receiveAllEvents(events))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const fetchEvent = id => dispatch => {
  console.log('action signin');
  return EventAPIUtil.signin(id).then(event => (
    dispatch(receiveSingleEvent(event))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const deleteEvent = eventId => dispatch => {
  console.log('action deleteEvent');
  return EventAPIUtil.deleteEvent(eventId)
    .then(event => (dispatch(receiveSingleEvent(null))),
          err => (dispatch(receiveErrors(err.responseJSON))
        ));
};

// export const fetchMyEvents = () => dispatch => {
//   console.log('action myevents');
//   return EventAPIUtil.?????().then(events => (
//     dispatch(receiveMyEvents(events))
//   ));
// };
