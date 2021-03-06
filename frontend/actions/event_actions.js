import * as EventAPIUtil from '../util/events_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const RECEIVE_MY_EVENTS = 'RECEIVE_MY_EVENTS';


const receiveAllEvents = events => {
  // console.log('action receiveEvents');
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


const receiveSingleEvent = event => {
  // console.log('action receiveEvents');
  return {
    type: RECEIVE_EVENT,
    event
  };
};

export const receiveErrors = errors => {
  // console.log('action receiveErrors');
  return {
  type: RECEIVE_EVENT_ERRORS,
  errors
  };
};


export const fetchEvents = () => dispatch => {
  // console.log('action fetchEvents');
  return EventAPIUtil.fetchEvents().then(events => (
    dispatch(receiveAllEvents(events))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const fetchMyEvents = () => dispatch => {
  // console.log('action fetchEvents');
  return EventAPIUtil.fetchEvents().then(events => (
    dispatch(receiveAllEvents(events))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const fetchEvent = id => dispatch => {
  // console.log('action fetch event');
  return EventAPIUtil.fetchEvent(id).then(event => (
    dispatch(receiveSingleEvent(event))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const createEvent = event => dispatch => {
  // console.log('action create event');
  return EventAPIUtil.createEvent(event).then(evt => (
      dispatch(receiveSingleEvent(evt))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};

export const updateEvent = event => dispatch => {
  return EventAPIUtil.updateEvent(event).then(evt => (
    dispatch(receiveSingleEvent(event))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const deleteEvent = eventId => dispatch => {
  // console.log('action deleteEvent');
  // event => (dispatch(receiveSingleEvent(event)))
  return EventAPIUtil.deleteEvent(eventId)
    .then(null,
          err => (dispatch(receiveErrors(err.responseJSON))
        ));
};
