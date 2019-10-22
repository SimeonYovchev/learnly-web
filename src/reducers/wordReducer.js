import { createReducer } from '../utils';
import {
  GET_WORD_REQUEST,
  GET_WORD_SUCCESS,
  GET_WORD_FAILURE,
  CREATE_WORD_REQUEST,
  CREATE_WORD_SUCCESS,
  CREATE_WORD_FAILURE,
  CLEAR_WORD,
} from '../constants';

const initialState = {
  isLoaded: false,
  isLoading: false,
  word: {
    text: '',
    translations: [],
    examples: [],
    answers: {
      totalCount: 0,
      correctAnswersCount: 0,
      incorrectAnswersCount: 0,
      list: [],
    },
  },
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
  [CREATE_WORD_REQUEST]: state => ({
    ...state,
    isLoading: true,
  }),
  [CREATE_WORD_SUCCESS]: (state, payload) => ({
    ...state,
    isLoaded: true,
    isLoading: false,
    word: payload,
  }),
  [CREATE_WORD_FAILURE]: state => ({
    ...state,
    isLoaded: false,
    isLoading: false,
    error: true,
  }),
  [CLEAR_WORD]: state => ({
    ...state,
    ...initialState,
  }),
});
