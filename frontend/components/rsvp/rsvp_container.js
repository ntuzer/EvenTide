import { connect } from 'react-redux';
import Rsvp from './rsvp';


const mapStateToProps = (state, ownProps) => {
  return {
    event: state.events[ownProps.match.params.eventId],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(mapStateToProps, null)(Rsvp);
