import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import store from '../store';

export default class Send extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(){
    this.props.onSend(store.getState());
  }
  render() {
    return (
      <div>
        <RaisedButton label="Send Letter" fullWidth={true} onClick={()=>this.onSubmit()} />
        {/* <button label="Send Letter"  /> */}
      </div>
    )
  }
}
