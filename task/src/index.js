import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
