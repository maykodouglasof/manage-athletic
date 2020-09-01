import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Benefits from '../pages/Benefits';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/benefits" component={Benefits} />
  </Switch>
);

export default Routes;
