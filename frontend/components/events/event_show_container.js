import { connect } from 'react-redux';
import {
  fetchEvent, createEvent, deleteEvent
} from '../../actions/event_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
  return {
    events: state.events,
    eventId: ownProps.match.params.eventId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
