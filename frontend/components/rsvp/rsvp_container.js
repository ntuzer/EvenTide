import { connect } from 'react-redux';
import Rsvp from './rsvp';
import { createRSVP, receiveRSVPS } from '../../actions/rsvp_actions';
import { fetchTicket } from '../../actions/ticket_actions';



const mapStateToProps = (state, ownProps) => {

  return {

    userId: state.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createRSVP: rsvp => dispatch(createRSVP(rsvp)),
    receiveRSVPS: () => dispatch(receiveRSVPS()),
    fetchTicket: id => dispatch(fetchTicket(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
