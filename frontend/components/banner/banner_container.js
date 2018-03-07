import { connect } from 'react-redux';
import Banner from './banner';

const mapStateToProps = (state) => {
  return {
    banner_index: 0
  };
};

export default connect(
  mapStateToProps,
  null
)(Banner);
