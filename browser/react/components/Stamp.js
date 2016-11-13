import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginTop: 16,
  },
};

const customContentStyle = {
  width: '250px',
  maxWidth: 'none',
};

export default class Stamp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});

  };
  _onClick(val){
      this.props.onStampChange(val);
  }
  render(){
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />
    ];

    const radios = [];
    let items = ["1930s-1.png","elvis-29.png","help-me-obi-wan-41.jpg","US_stamp_1898_1c_Franklin_green.png"]
    for (var i=0; i<items.length; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={items[i]}
          label={<img src={"/stamps/" + items[i]} height="100px" />}
          style={styles.radioButton}
          onClick={this._onClick.bind(this,items[i])}
        />
      );
    }


    return (
      <div>
        <img src={"/stamps/" + this.props.Stamp} height="150px" />
        <br />
        <RaisedButton label="Change Stamp" onTouchTap={this.handleOpen} />
        <Dialog
          title="Select a Stamp"
          actions={actions}
          modal={false}
          open={this.state.open}
          contentStyle={customContentStyle}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            {radios}
          </RadioButtonGroup>
        </Dialog>
      </div>
    );
  }
}
