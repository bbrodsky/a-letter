import React, { Component } from 'react';
import { fromChange } from '../actions/from-action';

export default class From extends Component {

  render(){
    return(
      <div>
        <input className="form-control" type="text" value="Who is this letter from" id="from-field-input" onChange="fromChange" />
      </div>
    )
  }
}
