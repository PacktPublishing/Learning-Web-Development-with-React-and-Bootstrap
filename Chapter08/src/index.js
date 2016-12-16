import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import 'babel-polyfill';

// import CSS

import '../vendor/css/base.css';
import '../vendor/css/bootstrap.min.css';

render(
  <App />,
  document.querySelector('#Api-root')
);
