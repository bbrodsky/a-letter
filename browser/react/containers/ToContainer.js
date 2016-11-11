import { connect } from 'react-redux';
import To from '../components/To';

const mapStateToProps = function (state) {
  return {
    To: state.to
  };
};

const statefulComponentCreator = connect(mapStateToProps);
const ToContainer = statefulComponentCreator(To);
export default ToContainer;
