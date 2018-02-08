import { connect } from 'react-redux';

import {
  fetchEvents, fetchEvent, createEvent, updateEvent, deleteEvent, receiveErrors
} from '../../actions/event_actions';
import { createTicket } from '../../actions/ticket_actions';
import EventForm from './event_form';


const mapStateToProps = (state) => {
  // console.log('efc mstp state', state);
  return {
    errors: state.errors,
    eventId: state.events.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log("efc mdtp",ownProps);
  return {
    createTicket: ticket => dispatch(createTicket(ticket)),
    createForm: event => dispatch(createEvent(event)),
    updateEvent: event => dispatch(updateEvent(event)),
    clearErrors: () => dispatch(receiveErrors([])),
    deleteEvent: eventId => dispatch(deleteEvent(eventId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
