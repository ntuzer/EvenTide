import { connect } from 'react-redux';

import {
  fetchEvents, fetchEvent, createEvent, deleteEvent, receiveErrors
} from '../../actions/event_actions';
import EventForm from './event_form';


const mapStateToProps = (state) => {
  return {
    // loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
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
