import { connect } from 'react-redux';

import {
  fetchEvents, fetchEvent, createEvent, deleteEvent, receiveErrors
} from '../../actions/event_actions';
import EventForm from './event_form';


const mapStateToProps = (state) => {
  // console.log('efc mstp state', state);
  return {
    // loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.events
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    createForm: event => dispatch(createEvent(event)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
