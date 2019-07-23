import { createReducer } from '../utils';
import {
  // GET_CURRENT_USER_REQUEST,
  // GET_CURRENT_USER_SUCCESS,
  // GET_CURRENT_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from '../constants';

const initialState = {
  users: [],
  data: null,
  currentUser: {
    name: null,
    email: null,
  },
  isFetched: false,
  isFetching: false,
  registerError: false,
  error: null,
};

export default createReducer(initialState, {
  // [GET_CURRENT_USER_REQUEST]: state => ({
  //   ...state,
  //   isFetching: true,
  //   error: false,
  // }),
  // [GET_CURRENT_USER_SUCCESS]: (state, payload) => ({
  //   ...state,
  //   currentUser: payload,
  //   isFetching: false,
  //   error: false,
  // }),
  // [GET_CURRENT_USER_FAILURE]: (state, payload) => ({
  //   ...state,
  //   isFetching: false,
  //   error: payload,
  // }),
  [REGISTER_USER_REQUEST]: state => ({
    ...state,
    isFetching: true,
  }),
  [REGISTER_USER_SUCCESS]: (state, payload) => ({
    ...state,
    isFetched: true,
    isFetching: false,
    data: payload,
  }),
  [REGISTER_USER_FAILURE]: state => ({
    ...state,
    isFetched: false,
    isFetching: false,
    registerError: true,
  }),
});
