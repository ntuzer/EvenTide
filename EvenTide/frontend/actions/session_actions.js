import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => {
  console.log('action receiveCurrentUser');
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => {
  console.log('action receiveErrors');
  return {
  type: RECEIVE_SESSION_ERRORS,
  errors
  };
};

export const signup = user => dispatch => {
  console.log('action signup');
  return APIUtil.signup(user).then(rUser => (
    dispatch(receiveCurrentUser(rUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const signin = user => dispatch => {
  console.log('action signin');
  return APIUtil.signin(user).then(rUser => (
    dispatch(receiveCurrentUser(rUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const logout = () => dispatch => {
  console.log('action logout');
  return APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ));
};
