import React, { Component } from 'react';
import To from '../containers/ToContainer';
import From from '../containers/FromContainer';
import Stamp from '../containers/StampContainer';
import Location from '../containers/LocationContainer';
import Contents from '../containers/ContentsContainer';
// import {Send} from '../containers/SendContainer';


export class Letter extends Component {
  render() {
    return (
      <div>
        <To />
        <From />
        {/* <Stamp /> */}
        <Location />
        {/* <Contents /> */}
      </div>
    )
  }
}
