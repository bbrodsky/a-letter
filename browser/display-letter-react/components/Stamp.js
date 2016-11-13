import React, { Component } from 'react';


export default class Stamp extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <img src={"/stamps/" + this.props.value} height="150px" />
      </div>
    );
  }
}
