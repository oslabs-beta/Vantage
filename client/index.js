import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store';


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);