import React, { Component } from 'react';
// import { fromChange } from '../actions/from-action';

import TextField from 'material-ui/TextField'


export default class Contents extends Component {

  render(){
    return(
        <TextField
          hintText="Contents"
          multiLine={true}
          fullWidth={true}
          underlineShow={false}
          // rows={2}
          // rowsMax={4}
        />
    )
  }
}
