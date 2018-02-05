import { connect } from 'react-redux';
import {
  fetchEvents, fetchEvent, createEvent, deleteEvent
} from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (state, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
