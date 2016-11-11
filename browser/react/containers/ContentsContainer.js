import { connect } from 'react-redux';
import Contents from '../components/Contents';

const mapStateToProps = function (state) {
  return {
    Contents: state.contents
  };
};

const statefulComponentCreator = connect(mapStateToProps);
const ContentsContainer = statefulComponentCreator(Contents);
export default ContentsContainer;
