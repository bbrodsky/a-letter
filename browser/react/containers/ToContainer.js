import { connect } from 'react-redux';
import To from '../components/To';
import { toFieldChange } from '../actions/to-action';

const mapStateToProps = function (state) {
  return {
    To: state.To
  };
};

const mapDispatchToProps = (dispatch) => ({
  onToChange: to => dispatch(toFieldChange(to))
})

const statefulComponentCreator = connect(mapStateToProps,mapDispatchToProps);
const ToContainer = statefulComponentCreator(To);
export default ToContainer;
