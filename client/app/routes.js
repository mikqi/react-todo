import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Dashboard} />
    <Route path='dashboard' component={Dashboard} />
    <Route path='login' component={Login} />
  </Route>
);
