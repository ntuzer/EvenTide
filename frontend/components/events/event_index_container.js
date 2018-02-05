import { connect } from 'react-redux';
import {
  fetchEvents, fetchEvent, createEvent, deleteEvent
} from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = (state, ownProps) => {

  console.log('VC mstp eic state', state);
  console.log('eic op', ownProps);
  return {};
};

const mapDispatchToProps = (state, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
