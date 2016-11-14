import React, { Component } from 'react';
import {Editor, ContentState, EditorState, convertFromRaw} from 'draft-js';


export default class Contents extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="contents">
        <Editor editorState={this.props.value} readOnly={true} />
      </div>
    )
  }
}
