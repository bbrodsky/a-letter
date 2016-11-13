import React, { Component } from 'react';
import { toFieldChange } from '../actions/to-action';
import TextField from 'material-ui/TextField';


export default class To extends Component {
  constructor(props) {
    super(props);
    this.toChange = this.toChange.bind(this);
  }
  toChange(e){
    this.props.onToChange(e.target.value);
  }

  render(){
    return(
      <div>
        <TextField
          hintText="To"
          style={{textColor:'black',fontFamily: 'Over the Rainbow'}}
          floatingLabelText="Who is this letter addressed to?"
          value={this.props.to}
          onChange={this.toChange}
          multiLine={true}
          rows={2}
          rowsMax={2}
        />
      </div>
    )
  }
}
