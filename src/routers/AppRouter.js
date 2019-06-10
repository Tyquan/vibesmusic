import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/pages/DashboardPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import FrontPage from '../components/pages/FrontPage';
import SignupPage from '../components/pages/SignupPage';
import LoginPage from '../components/pages/LoginPage';
import LogoutPage from '../components/pages/LogoutPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={FrontPage} exact={true} />
                <PublicRoute path="/signup" component={SignupPage} />
                <PublicRoute path="/login" component={LoginPage} />
                <PublicRoute path="/logout" component={LogoutPage} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;