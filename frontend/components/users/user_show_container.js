import { connect } from 'react-redux';
import UserShow from './user_show';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    email: state.session.currentUser.email
  };
};

export default connect(mapStateToProps, null)(UserShow);
