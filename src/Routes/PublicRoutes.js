import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import App from '../components/App';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const PublicRoutes = () => (
  <Switch>
    <Route path="/login" component={LoginForm} />
    <Route path="/register" component={RegisterForm} />
    <ProtectedRoute component={App} />
  </Switch>
);

export default PublicRoutes;
