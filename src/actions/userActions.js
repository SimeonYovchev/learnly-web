import httpService from '../services/httpService';
import {
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from '../constants';
import { getCurrentUser, setJwt } from '../services/authService';

export const getCurrentUserRequest = () => ({ type: GET_CURRENT_USER_REQUEST });

export const getCurrentUserSuccess = user => ({
  type: GET_CURRENT_USER_SUCCESS,
  payload: user,
});

export const getCurrentUserFailure = error => ({
  type: GET_CURRENT_USER_FAILURE,
  payload: error,
});

export const registerUserRequest = () => ({ type: REGISTER_USER_REQUEST });

export const registerUserSuccess = (user) => {
  setJwt(user.token);
  return {
    type: REGISTER_USER_SUCCESS,
    payload: user,
  };
};

export const registerUserFailure = error => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

export const registerUser = (data, history) => {
  return function (dispatch) {
    dispatch(registerUserRequest());

    httpService.post('/users', data)
      .then(({ data: createdUser }) => dispatch(registerUserSuccess(createdUser)))
      .then(() => history.replace('/dashboard'))
      .catch(error => dispatch(registerUserFailure(error)));
  };
};

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
