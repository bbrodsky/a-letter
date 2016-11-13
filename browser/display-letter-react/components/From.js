import React, { Component } from 'react';
import FromTwitter from './FromTwitter'
import FromFacebook from './FromFacebook'


const styles = {
  headline: {
    fontSize: 4,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10,
    textAlign: "center"
  },
};

const tabStyle = {
  backgroundColor: "#ECEFF1",
  color: "#546E7A"
}
const tabLine = {
  background:"black"
}

export default class From extends Component {
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
