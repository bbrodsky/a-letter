import { connect } from 'react-redux';
import Contents from '../components/Contents';
import { contentsFieldChange } from '../actions/contents-action';

const mapStateToProps = function (state) {
  return {
    Contents: state.contents
  };
};

const mapDispatchToProps = (dispatch) => ({
  onContentsChange: contents => dispatch(contentsFieldChange(contents))
})

const statefulComponentCreator = connect(mapStateToProps,mapDispatchToProps);
const ContentsContainer = statefulComponentCreator(Contents);
export default ContentsContainer;
