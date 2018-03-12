import { connect } from 'react-redux';
import {
  fetchMyEvents
} from '../../actions/event_actions';
import MyEvents from './my_events';
import {
        fetchBookmarks,
        fetchBookmark,
        removeBookmark,
        createBookmark,
      } from '../../actions/bookmark_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    events: state.events,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMyEvents: () => dispatch(fetchMyEvents()),
    createBookmark: id => dispatch(createBookmark(id)),
    fetchBookmarks: () => dispatch(fetchBookmarks()),
    fetchBookmark: id => dispatch(fetchBookmark(id)),
    removeBookmark:  id => dispatch(removeBookmark(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyEvents);
