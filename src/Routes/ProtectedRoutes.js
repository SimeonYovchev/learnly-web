import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../components/Dashboard/Dashboard';
import WordsList from '../components/WordsList';
import Settings from '../components/Settings';


const ProtectedRoutes = () => (
  <Switch>
    <ProtectedRoute path="/dashboard" component={Dashboard} />
    <ProtectedRoute path="/words" component={WordsList} />
    <ProtectedRoute path="/settings" component={Settings} />
    <Redirect from="/" to="/dashboard" exact component={Dashboard} />
  </Switch>
);

export default ProtectedRoutes;
