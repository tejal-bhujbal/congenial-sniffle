import React from 'react';
import {Switch, Route} from 'react-router-dom';
import * as routes from '../common';
import {UserDashboard} from '../pages';

const DashboardRoute = () => {
    return (
      <Switch>
          <Route component={UserDashboard} path={routes.ROOT_ROUTE} exact />
          <Route component={UserDashboard} path={routes.HOME} exact />
      </Switch>
    )
}

export default DashboardRoute;