import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { TextField, Button, Link, InputAdornment } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import KeyIcon from '@material-ui/icons/VpnKeyOutlined';
import { loginUser } from '../../actions/authActions';
import './LoginForm.css';


const LoginForm = ({ user, loginUser, history }) => {
  const [credentialns, setCredentialns] = useState({ email: '', password: '' });

  if (user.name) return <Redirect to="/" />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentialns({ ...credentialns, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser(credentialns, history);
  };

  return (
    <div className="login-form-container">
      <h2 style={{ fontWeight: 500, color: 'rgba(0, 0, 0, 0.87)' }}>LOGIN TO YOUR ACCOUNT</h2>
      <form className="login-form" onSubmit={handleSubmit} noValidate autoComplete="off">
        ￼
        <TextField
          type="email"
          name="email"
          label="Email"
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EmailIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <KeyIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          className="login-button"
          variant="contained"
          type="submit"
          size="large"
          fullWidth
          disabled={!credentialns.email || !credentialns.password}
          style={{ marginTop: '20px' }}
        >
          Sign in now
        </Button>
        <p>
          Don&#39;t have an account?&nbsp;
          <Link component={RouterLink} to="/register" style={{ color: '#039be5' }}>Sign up</Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.authUser,
  };
};

const mapDispatchToProps = dispatch => ({
  loginUser: bindActionCreators(loginUser, dispatch),
});

LoginForm.propTypes = {
  user: PropTypes.shape().isRequired,
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
