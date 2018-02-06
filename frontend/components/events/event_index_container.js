import { connect } from 'react-redux';
import {
  fetchEvents, fetchEvent, createEvent, deleteEvent
} from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = (state, ownProps) => {
  return {
    events: Object.values(state.events),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
