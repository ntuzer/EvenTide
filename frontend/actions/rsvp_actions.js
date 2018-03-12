import * as RsvpAPIUtil from '../util/rsvps_api_util';

export const RECEIVE_RSVPS = 'RECEIVE_RSVP';
export const RECEIVE_RSVP_ERRORS = 'RECEIVE_RSVP_ERRORS';


const receiveRSVPS = rsvps => {
  // console.log('action receiveEvents');
  return {
    type: RECEIVE_RSVPS,
    rsvps
  };
};

export const receiveErrors = errors => {
  return {
  type: RECEIVE_RSVP_ERRORS,
  errors
  };
};

export const createRSVP = rsvp => dispatch => {
  return RsvpAPIUtil.createRSVP(rsvp).then(sRsvp => (
      dispatch(receiveRSVPS(sRsvp))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};
