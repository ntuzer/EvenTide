import { connect } from 'react-redux';
import UserShow from './user_show';
import {
        fetchBookmarks,
        fetchBookmark,
        removeBookmark
      } from '../../actions/bookmark_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    email: state.session.currentUser.email
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBookmarks: () => dispatch(fetchBookmarks()),
    fetchBookmark: id => dispatch(fetchBookmark(id)),
    removeBookmark:  id => dispatch(removeBookmark(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
