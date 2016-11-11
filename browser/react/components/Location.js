import React, { Component } from 'react';
import { locationSet } from '../actions/location-action';

export default class Location extends Component {
  // const thunk = function (dispatch) {
  // fetch('/api/albums/' + albumId)
  //   .then(res => res.json())
  //   .then(album => {
  //     const receiveAlbumAction = receiveAlbum(album);
  //     dispatch(receiveAlbumAction);
  //   });
// };

  render(){
    let location_ip = '';
    Promise
      .all([
        fetch('/location')
        .then(res => res.json()),
      ])
      .then(results => {
        location_ip = results[0].ip;
        console.log("IP",location_ip)
      });
    return(
      <div>
        <input className="form-control" type="text" value="Where is this letter from" id="location-field-input" onChange="locationSet" />
      </div>
    )
  }
}
