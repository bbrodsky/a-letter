import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

import {Letter} from './components/Letter';


ReactDOM.render(
  <Provider store={store}>
    <Letter />
  </Provider>,
  document.getElementById('app')
);
