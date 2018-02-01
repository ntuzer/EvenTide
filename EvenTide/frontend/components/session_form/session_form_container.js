import { connect } from 'react-redux';

import { signin, logout, signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  console.log('sfc state: ', state);
  console.log('sfc mstp');
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  console.log('sfc mdtp');
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
