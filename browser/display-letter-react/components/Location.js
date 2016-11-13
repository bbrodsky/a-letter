import React, { Component } from 'react';


export default class Location extends Component {
  constructor (props) {
    super(props);
  }
  render(){
    return(
      <div>
        <div key="location">
          {this.props.value}
        </div>
      </div>
    )
  }
}
