import { connect } from 'react-redux';
import Stamp from '../components/Stamp';

const mapStateToProps = function (state) {
  return {
    Stamp: state.stamp
  };
};

const statefulComponentCreator = connect(mapStateToProps);
const StampContainer = statefulComponentCreator(Stamp);
export default StampContainer;
