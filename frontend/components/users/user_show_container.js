import { connect } from 'react-redux';
import UserShow from './user_show';
import {
        fetchBookmarks,
        fetchBookmark,
        removeBookmark,
        createBookmark,
      } from '../../actions/bookmark_actions';

const mapStateToProps = (state, ownProps) => {
  console.log('us mstp', state);
  return {
    loggedIn: Boolean(state.session.currentUser),
    email: state.session.currentUser.email,
    bookmarks: Object.values(state.bookmarks)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBookmark: id => dispatch(createBookmark(id)),
    fetchBookmarks: () => dispatch(fetchBookmarks()),
    fetchBookmark: id => dispatch(fetchBookmark(id)),
    removeBookmark:  id => dispatch(removeBookmark(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
