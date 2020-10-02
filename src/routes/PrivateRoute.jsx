import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as routes from '../common';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            (localStorage.getItem('user') && localStorage.getItem('user') !== null && localStorage.getItem('user') !== undefined)
                ? <Component {...props} />
                : <Redirect to={routes.SIGN_IN} />
        )} />
    )
}

export default PrivateRoute;