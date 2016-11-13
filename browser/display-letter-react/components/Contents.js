import React, { Component } from 'react';

export default class Contents extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <p>
        {this.props.value}
      </p>
    )
  }
}
