import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/login';
import Sign from './pages/sign';
import NotFound from './pages/notfound'

export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/sign" component={Sign} />
    <Route component={NotFound}/>
  </Switch>
);
