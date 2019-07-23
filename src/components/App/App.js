import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProtectedRoutes from '../../Routes/ProtectedRoutes';
import AppHeader from '../AppHeader/AppHeader';
import Sidebar from '../Sidebar/Sidebar';
import { fetchAuthUser, logoutUser } from '../../actions/authActions';
import './App.css';
import { useStyles } from '../../hooks/useStyle';

function App({ user, fetchAuthUser, logoutUser, history }) {
  const classes = useStyles();

  useEffect(() => {
    fetchAuthUser();
  }, []);

  const handleLogout = () => {
    logoutUser();
    history.replace('/');
  };

  return (
    <div id="app-wrapper">
      <CssBaseline />
      <AppHeader
        user={user}
        onLogout={handleLogout}
      />
      <Sidebar
        user={user}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ProtectedRoutes />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.authUser,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAuthUser: bindActionCreators(fetchAuthUser, dispatch),
  logoutUser: bindActionCreators(logoutUser, dispatch),
});

App.propTypes = {
  user: PropTypes.shape().isRequired,
  fetchAuthUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
