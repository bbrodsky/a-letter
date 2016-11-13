import { connect } from 'react-redux';
import From from '../components/From';
import { fromFieldChange } from '../actions/from-action';

const mapStateToProps = function (state) {
  return {
    from: state.from
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFromChange: from => dispatch(fromFieldChange(from))
})

const statefulComponentCreator = connect(mapStateToProps,mapDispatchToProps);
const FromContainer = statefulComponentCreator(From);
export default FromContainer;
