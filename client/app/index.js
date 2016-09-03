import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './assets/style/lemonade.scss';
import './assets/style/base.scss';
import './assets/style/Navigation.scss';

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'));
