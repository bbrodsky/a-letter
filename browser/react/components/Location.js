import React, { Component } from 'react';


export default class Location extends Component {
  componentDidMount(){
    var options = {
      enableHighAccuracy: true,
      maximumAge: 0
    };

    const success = (pos) => {
      var crd = pos.coords;
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
        <div key="location">
          {this.props.location}
        </div>
      </div>
    )
  }
}
