import { connect } from 'react-redux';
import {
        fetchTickets
      } from '../../actions/rsvp_actions';
import TicketIndex from './my_tickets';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    loggedIn: Boolean(state.session.currentUser),
    rsvps: state.rsvps
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTickets: () => dispatch(fetchTickets()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketIndex);
