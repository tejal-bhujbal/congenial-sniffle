import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import * as routes from './common';
import {PrivateRoute} from './routes';
import {Dashboard, SignInContainer} from './pages';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path={routes.SIGN_IN} component={SignInContainer} exact />
        <PrivateRoute path={routes.ROOT_ROUTE} component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;