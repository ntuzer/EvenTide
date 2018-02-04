import { connect } from 'react-redux';
import {  } from '../../actions/album_actions';
import EventIndex from './eventIndex';

const mapStateToProps = (state, ownProps) => {

  console.log('eic state', state);
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
