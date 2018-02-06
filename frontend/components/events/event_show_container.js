import { connect } from 'react-redux';
import {
  fetchEvent, createEvent, deleteEvent
} from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = (state, ownProps) => {
  return {
    events: Object.values(state.event),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvent: () => dispatch(fetchEvent()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
