import React, { Component } from 'react';



export default class To extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.value}
      </div>
    )
  }
}
