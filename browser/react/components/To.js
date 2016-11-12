import React, { Component } from 'react';
import { toFieldChange } from '../actions/to-action';


export default class To extends Component {

  render(){
    return(
      <div>
        <label htmlFor="to-field-input" className="col-form-label">Destination: </label>
        <input
          className="form-control"
          type="text"
          value=""
          id="to-field-input"
          onChange="toFieldChange" />
      </div>
    )
  }
}
