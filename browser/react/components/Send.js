import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import store from '../store';

export default class Send extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSent: false,
      openFail: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleOpenSent = this.handleOpenSent.bind(this);
    this.handleCloseSent = this.handleCloseSent.bind(this);
    this.handleOpenFail = this.handleOpenFail.bind(this);
    this.handleCloseFail = this.handleCloseFail.bind(this);
  }
  onSubmit(){
    let tmp = store.getState()
    if (tmp.to !== "" && tmp.contents !== ""){
      this.props.onSend(tmp);
      this.handleOpenSent();
    } else {
      this.handleOpenFail();
    }

  }
  handleOpenSent() {
    this.setState({openSent: true});
  };

  handleCloseSent() {
    document.location = `/${this.props.id}`;
  };
  handleOpenFail() {
    this.setState({openFail: true});
  };

  handleCloseFail() {
    this.setState({openFail: false});
  };
  render() {
    const actionsSent = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleCloseSent}
      />
    ];
    const actionsFail = [
      <FlatButton
        label="Try again"
        primary={true}
        onTouchTap={this.handleCloseFail}
      />
    ];
    return (
      <div>
        <RaisedButton label="Send Letter" fullWidth={true} onClick={()=>this.onSubmit()} />
        <Dialog
          title="You're letter has been sent"
          actions={actionsSent}
          modal={false}
          open={this.state.openSent}
          onRequestClose={this.handleCloseSent}
        >
          Your letter is available at Letter.Care/{this.props.id}
        </Dialog>
        <Dialog
          title="You're letter has NOT been sent"
          actions={actionsFail}
          modal={false}
          open={this.state.openFail}
          onRequestClose={this.handleCloseFail}
        >
          A lette must be addressed to someone and you must have something to say.
        </Dialog>
      </div>
    )
  }
}
