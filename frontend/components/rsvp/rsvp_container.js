import { connect } from 'react-redux';
import Rsvp from './rsvp';
import { createRSVP, receiveRSVPS } from '../../actions/rsvp_actions';



const mapStateToProps = (state, ownProps) => {
  console.log(`estado: ${state}`);
  return {
    rsvps: state.rsvps,
    userId: state.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createRSVP: rsvp => dispatch(createRSVP(rsvp)),
    receiveRSVPS: () => dispatch(receiveRSVPS())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
