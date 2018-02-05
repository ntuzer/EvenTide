import { connect } from 'react-redux';
import {
  signin, logout, signup, receiveErrors
} from '../../actions/session_actions';
import Navbar from './navbar';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    // errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    signOut: () => dispatch(logout())
    // clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
