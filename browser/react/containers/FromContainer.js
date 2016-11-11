import { connect } from 'react-redux';
import From from '../components/From';

const mapStateToProps = function (state) {
  return {
    From: state.from
  };
};

const statefulComponentCreator = connect(mapStateToProps);
const FromContainer = statefulComponentCreator(From);
export default FromContainer;
