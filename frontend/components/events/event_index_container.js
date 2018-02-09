import { connect } from 'react-redux';
import {
  fetchEvents, fetchEvent, createEvent, deleteEvent
} from '../../actions/event_actions';
import {
        fetchBookmarks,
        fetchBookmark,
        removeBookmark
      } from '../../actions/bookmark_actions';
import EventIndex from './event_index';

const mapStateToProps = (state, ownProps) => {
    console.log("eic state", state);
  return {
    events: Object.values(state.events),
    bookmarks: Object.values(state.bookmarks)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    fetchBookmarks: () => dispatch(fetchBookmarks()),
    fetchBookmark: id => dispatch(fetchBookmark(id)),
    removeBookmark:  id => dispatch(removeBookmark(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
