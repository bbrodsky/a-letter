import React from 'react';
import ReactDOM from 'react-dom';


import {Letter} from './components/Letter';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let id = document.location.href.split("/").pop();

ReactDOM.render(
  <div>
    <MuiThemeProvider>
      <div>
        <Letter id={id} />
      </div>
    </MuiThemeProvider>
  </div>
    ,
  document.getElementById('displayLetter')
);
