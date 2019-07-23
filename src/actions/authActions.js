import jwtDecode from 'jwt-decode';
import httpService from '../services/httpService';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE,
  LOGOUT_USER,
} from '../constants';
import { logout, setJwt, getCurrentUser } from '../services/authService';

export const loginUserRequest = () => ({ type: LOGIN_USER_REQUEST });

export const loginUserSuccess = (token) => {
  setJwt(token);
  const user = jwtDecode(token);

  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      ...user,
      token,
    },
  };
};

export const loginUserFailure = () => ({ type: LOGIN_USER_FAILURE });

export const loginUser = (credentials, history) => {
  return (dispatch) => {
    dispatch(loginUserRequest());

    httpService.post('/auth/signin', credentials) // extract this call into service
      .then(response => dispatch(loginUserSuccess(response.data)))
      .then(() => history.replace('/dashboard'))
      .catch(error => dispatch(loginUserFailure(error)));
  };
};

export const getCurrentUserRequest = () => ({ type: GET_CURRENT_USER_REQUEST });

export const getCurrentUserSuccess = user => ({
  type: GET_CURRENT_USER_SUCCESS,
  payload: user,
});

export const getCurrentUserFailure = error => ({
  type: GET_CURRENT_USER_FAILURE,
  payload: error,
});

export const fetchAuthUser = () => {
  return (dispatch) => {
    dispatch(getCurrentUserRequest());
    const user = getCurrentUser();

    if (user) {
      dispatch(getCurrentUserSuccess(user));
    } else {
      dispatch(getCurrentUserFailure('No token provided'));
    }
  };
};

export const logoutRequest = () => {
  logout();
  return { type: LOGOUT_USER };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logoutRequest());
  };
};
