import React, { Component } from 'react';
import { fromChange } from '../actions/from-action';
import FromTwitter from './FromTwitter'
import FromFacebook from './FromFacebook'

import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

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
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.setFromField = this.setFromField.bind(this);

  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  setFromField(e) {
    this.props.onFromChange(e.target.value);
  }

  render(){
    return(
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          inkBarStyle={tabLine}
        >
          <Tab
            label="Email"
            value={0}
            style={tabStyle}
          />
          <Tab
            label="Facebook"
            value={1}
            style={tabStyle}
          />
          <Tab
            label="Twitter"
            value={2}
            style={tabStyle}
         />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <div>
              <input
                style={{textAlign:"center"}}
                className="form-control"
                type="text"
                value={this.props.from}
                id="from-field-input"
                onChange={this.setFromField} />
            </div>
          </div>
          <div style={styles.slide}>
            <FromFacebook />
          </div>
          <div style={styles.slide}>
            <FromTwitter />
          </div>
        </SwipeableViews>
      </div>
    )
  }
}
