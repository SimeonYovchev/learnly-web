import { createReducer } from '../utils';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE,
  LOGOUT_USER,
} from '../constants';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  loginError: false,
  authUser: {},
  currentUserError: false,
  open: true,
};

export default createReducer(initialState, {
  [LOGIN_USER_REQUEST]: state => ({
    ...state,
    isAuthenticating: true,
  }),
  [LOGIN_USER_SUCCESS]: (state, payload) => ({
    ...state,
    isAuthenticated: true,
    isAuthenticating: false,
    authUser: payload,
  }),
  [LOGIN_USER_FAILURE]: state => ({
    ...state,
    isAuthenticated: false,
    isAuthenticating: false,
    loginError: true,
  }),
  [GET_CURRENT_USER_REQUEST]: state => ({
    ...state,
    isAuthenticated: true,
    isAuthenticating: false,
    currentUserError: false,
  }),
  [GET_CURRENT_USER_SUCCESS]: (state, payload) => ({
    ...state,
    isAuthenticated: true,
    isAuthenticating: false,
    authUser: payload,
    currentUserError: false,
  }),
  [GET_CURRENT_USER_FAILURE]: (state, payload) => ({
    ...state,
    isAuthenticated: false,
    isAuthenticating: false,
    currentUserError: payload,
  }),
  [LOGOUT_USER]: () => initialState,
});
