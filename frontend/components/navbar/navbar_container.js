import { connect } from 'react-redux';
import { signin, logout, signup, receiveErrors } from '../../actions/session_actions';
import Navbar from './navbar';


const mapStateToProps = (state, ownProps) => {
  console.log('nav mstp state:', state);
  console.log('nav mstp ownprops:', ownProps);
  return {
    loggedIn: Boolean(state.session.currentUser),
    // errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  // const processForm = (formType === 'login') ? signin : signup;
  console.log('nav mdtp');
  return {
    signOut: () => dispatch(logout())
    // processForm: user => dispatch(processForm(user)),
    // formType,
    // clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
