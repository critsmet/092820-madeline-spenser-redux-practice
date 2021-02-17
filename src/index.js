import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { appReducer } from './redux/appReducer'

const store = createStore(appReducer)

ReactDOM.render(
  <Provider store={store}>
      <App someKey={"someValue"}/>
  </Provider>,
document.getElementById('root'));
