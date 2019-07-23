import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const user = getCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
