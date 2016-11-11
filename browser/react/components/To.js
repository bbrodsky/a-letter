import React, { Component } from 'react';
import { toFieldChange } from '../actions/to-action';

export default class To extends Component {

  render(){
    return(
      <div>
        Destination: <input className="form-control" type="text" value="Who is this letter addressed" id="to-field-input" onChange="toFieldChange" />
      </div>
    )
  }
}
