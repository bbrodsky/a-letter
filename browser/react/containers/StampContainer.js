import { connect } from 'react-redux';
import Stamp from '../components/Stamp';
import { stampSet } from '../actions/stamp-action';

const mapStateToProps = function (state) {
  return {
    stamp: state.stamp
  };
};

const mapDispatchToProps = (dispatch) => ({
  onStampChange: stamp => dispatch(stampSet(stamp))
})

const statefulComponentCreator = connect(mapStateToProps,mapDispatchToProps);
const StampContainer = statefulComponentCreator(Stamp);
export default StampContainer;
