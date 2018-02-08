import * as RsvpAPIUtil from '../util/rsvps_api_util';

export const RECEIVE_RSVP = 'RECEIVE_RSVP';
export const RECEIVE_RSVP_ERRORS = 'RECEIVE_RSVP_ERRORS';


const receiveRSVP = rsvp => {
  // console.log('action receiveEvents');
  return {
    type: RECEIVE_RSVP,
    rsvp
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
      dispatch(receiveRSVP(sRsvp))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};
