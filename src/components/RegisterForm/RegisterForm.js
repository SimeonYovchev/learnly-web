import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { TextField, Button, Link, InputAdornment } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import KeyIcon from '@material-ui/icons/VpnKeyOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import { registerUser } from '../../actions/userActions';
import './RegisterForm.css';

const RegisterForm = ({ user, registerUser, history }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });

  if (user.name) return <Redirect to="/" />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(userData, history);
  };

  return (
    <div className="register-form-container">
      <h2 style={{ fontWeight: 500, color: 'rgba(0, 0, 0, 0.87)' }}>CREATE AN ACCOUNT</h2>
      <form className="register-form" onSubmit={handleSubmit} noValidate autoComplete="off">
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
        // InputLabelProps={{
        //   focused: { color: 'rgba(0, 0, 0, 0.54)' },
        // }}
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
        <TextField
          name="name"
          label="Name"
          margin="normal"
          variant="outlined"
          style={{ width: '100%' }}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          className="register-button"
          variant="contained"
          type="submit"
          size="large"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Sign up now
        </Button>
        <p>
          Have an account?&nbsp;
          <Link component={RouterLink} to="/login" style={{ color: '#039be5' }}>Sign in</Link>
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
  registerUser: bindActionCreators(registerUser, dispatch),
});

RegisterForm.propTypes = {
  user: PropTypes.shape().isRequired,
  registerUser: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
