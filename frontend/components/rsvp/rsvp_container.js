import { connect } from 'react-redux';
import Rsvp from './rsvp';
import { createRSVP } from '../../actions/rsvp_actions';
import { fetchTicket } from '../../actions/ticket_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    event: state.events[ownProps.match.params.eventId],

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createRSVP: rsvp => dispatch(createRSVP(rsvp)),
    fetchTicket: id => dispatch(fetchTicket(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
