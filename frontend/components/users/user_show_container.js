import { connect } from 'react-redux';
import UserShow from './user_show';
import {
        fetchBookmarks,
        fetchBookmark,
        removeBookmark,
        createBookmark,
      } from '../../actions/bookmark_actions';
import { fetchEvents } from '../../actions/event_actions';
const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    email: state.session.currentUser.email,
    bookmarks: Object.values(state.bookmarks),
    events: Object.values(state.events),
    userId: state.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBookmark: id => dispatch(createBookmark(id)),
    fetchBookmarks: () => dispatch(fetchBookmarks()),
    fetchBookmark: id => dispatch(fetchBookmark(id)),
    removeBookmark:  id => dispatch(removeBookmark(id)),
    fetchEvents: () => dispatch(fetchEvents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
