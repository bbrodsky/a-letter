import React, { Component } from 'react';
import To from '../containers/ToContainer';
import From from '../containers/FromContainer';
import Stamp from '../containers/StampContainer';
import Location from '../containers/LocationContainer';
import Contents from '../containers/ContentsContainer';
// import {Send} from '../containers/SendContainer';

import Paper from 'material-ui/Paper';

export class Letter extends Component {
  render() {
    const bodyStyle = {
      padding: 10
    }
    const envelStyle = {
      padding:30
    }
    const contentsStyle = {
      paddingLeft:20,
      paddingRight:20
    };
    const stampStyle = {
      textAlign: "right"
    };
    const thirdRow = {
      height: 150
    }
    return (
      <div style={bodyStyle}>
        <Paper zDepth={2} style={envelStyle}>
          <div className="row">
            <div className="col-md-4">
              <From />
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4" style={stampStyle}>
              <Stamp />
              <Location />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"><div style={thirdRow}></div></div>
            <div className="col-md-4"><To /></div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </Paper>
        <hr />
        <Paper zDepth={3} style={contentsStyle}>
          <Contents />
        </Paper>

      </div>
    )
  }
}
