import React from 'react';
import {Editor} from 'draft-js';


export default ({value}) => (
  <div className="contents">
    <Editor editorState={value} readOnly={true} />
  </div>
)
