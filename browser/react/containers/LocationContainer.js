import { connect } from 'react-redux';
import Location from '../components/Location';

const mapStateToProps = function (state) {
  return {
    Location: state.location
  };
};

const statefulComponentCreator = connect(mapStateToProps);
const LocationContainer = statefulComponentCreator(Location);
export default LocationContainer;
