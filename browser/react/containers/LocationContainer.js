import { connect } from 'react-redux';
import Location from '../components/Location';
import { locationSet } from '../actions/location-action';

const mapStateToProps = function (state) {
  return {
    Location: state.location
  };
};

const mapDispatchToProps = dispatch => ({
  go: location => dispatch(locationSet(location))
});

// const statefulComponentCreator = connect(
//   mapStateToProps,
//   mapDispatchToProps
// );
// const LocationContainer = statefulComponentCreator(Location);
// export default LocationContainer;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Location);
