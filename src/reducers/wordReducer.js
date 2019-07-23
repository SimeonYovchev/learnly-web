import { createReducer } from '../utils';
import {
  GET_WORD_REQUEST,
  GET_WORD_SUCCESS,
  GET_WORD_FAILURE,
} from '../constants';

const initialState = {
  isLoaded: false,
  isLoading: false,
  word: {},
  error: false,
};

export default createReducer(initialState, {
  [GET_WORD_REQUEST]: state => ({
    ...state,
    isLoading: true,
  }),
  [GET_WORD_SUCCESS]: (state, payload) => ({
    ...state,
    isLoaded: true,
    isLoading: false,
    word: payload,
  }),
  [GET_WORD_FAILURE]: state => ({
    ...state,
    isLoaded: false,
    isLoading: false,
    error: true,
  }),
});
