import { connect } from 'react-redux';

import {
  signin, logout, signup, receiveErrors
} from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  console.log('VC sfc state: ', state);
  console.log('VC sfc mstp');
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  console.log('VC sfc mdtp');
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? signin : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
