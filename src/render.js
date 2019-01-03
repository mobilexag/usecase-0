/* eslint no-undef: off */
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

ReactDOM.render(
  <App />,
  document.getElementById('main'),
  () => { if (window.cordova) navigator.splashscreen.hide(); } // eslint-disable-line no-restricted-globals
);
