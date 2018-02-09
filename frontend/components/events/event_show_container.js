import { connect } from 'react-redux';
import {
  fetchEvent, createEvent, deleteEvent
} from '../../actions/event_actions';
import {
        fetchBookmarks,
        fetchBookmark,
        removeBookmark,
        createBookmark,
      } from '../../actions/bookmark_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
  // console.log('escOP',ownProps);
  return {
    event: state.events[ownProps.match.params.eventId],
    eventId: ownProps.match.params.eventId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    createBookmark: id => dispatch(createBookmark(id)),
    fetchBookmarks: () => dispatch(fetchBookmarks()),
    fetchBookmark: id => dispatch(fetchBookmark(id)),
    removeBookmark:  id => dispatch(removeBookmark(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
