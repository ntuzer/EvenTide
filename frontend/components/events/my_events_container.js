import { connect } from 'react-redux';
import {
  fetchMyEvent
} from '../../actions/event_actions';
import MyEvents from './my_events';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    events: state.events,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMyEvent: () => dispatch(fetchMyEvent()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyEvents);
