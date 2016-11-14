import React, { Component } from 'react';
import { contentsFieldChange } from '../actions/contents-action';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';

import TextField from 'material-ui/TextField'


export default class Contents extends Component {
  constructor(props) {
    super(props);

    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => {
      this.setState({editorState});
      const content = convertToRaw(this.state.editorState.getCurrentContent());
      this.props.onContentsChange(content);
      this.focus = () => this.refs.editor.focus();
    }

  }
  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render(){
    const {editorState} = this.state;
    return (
      <div className="contents" onClick={this.focus}>
        {/* <button onClick={this._onBoldClick.bind(this)}>Bold</button> */}
        <Editor ref="editor" editorState={this.state.editorState} handleKeyCommand={this.handleKeyCommand} onChange={this.onChange} />
      </div>
    )
  }
}
