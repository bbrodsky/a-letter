import React, { Component } from 'react';


export default class Location extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Location: ''
    };
  }

  componentDidMount(){
    var options = {
      enableHighAccuracy: true,
      // timeout: 5000,
      maximumAge: 0
    };

    const success = (pos) => {
      var crd = pos.coords;
      this.setState({Location: 'Latitude : ' + crd.latitude + ' / Longitude: ' + crd.longitude})
      this.props.go('Latitude : ' + crd.latitude + ' / Longitude: ' + crd.longitude);
    };

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };
    navigator.geolocation.getCurrentPosition(success, error, options)
  }

  render(){
    // let location_ip = '';
    // Promise
    //   .all([
    //     fetch('/location')
    //     .then(res => res.json()),
    //   ])
    //   .then(results => {
    //     location_ip = results[0].ip;
    //     console.log("IP",location_ip)
    //   });




    return(
      <div>
        <label htmlFor="location-field-input" className="col-form-label">Location: </label>
        <input
          className="form-control"
          type="text"
          value=""
          id="location-field-input"
          onChange="locationSet" />
        <div key="location">
          {this.state.Location}
        </div>
      </div>
    )
  }
}
