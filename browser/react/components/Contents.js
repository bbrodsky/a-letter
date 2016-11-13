import React, { Component } from 'react';
import { contentsFieldChange } from '../actions/contents-action';


import TextField from 'material-ui/TextField'


export default class Contents extends Component {
  constructor(props) {
    super(props);
    this.contentsChange = this.contentsChange.bind(this);
  }
  contentsChange(e){
    this.props.onContentsChange(e.target.value);
  }
  render(){
    return(
        <TextField
          hintText="Contents"
          style={{fontFamily: 'Over the Rainbow'}}
          multiLine={true}
          fullWidth={true}
          underlineShow={false}
          rows={2}
          value={this.props.Contents}
          onChange={this.contentsChange}
          // rowsMax={4}
        />
    )
  }
}
