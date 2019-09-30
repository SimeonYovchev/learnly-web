import { createReducer } from '../utils';
import {
  GET_WORDS_REQUEST,
  GET_WORDS_SUCCESS,
  GET_WORDS_FAILURE,
  CLEAR_WORDS,
} from '../constants';

const initialState = {
  isLoaded: false,
  isLoading: false,
  wordsData: {
    totalCount: 0,
    wordsList: [],
    currentPage: 0,
    itemsPerPage: 20,
    sortBy: 'createdAt',
    direction: 'desc',
  },
  error: false,
};

export default createReducer(initialState, {
  [GET_WORDS_REQUEST]: state => ({
    ...state,
    isLoading: true,
  }),
  [GET_WORDS_SUCCESS]: (state, payload) => ({
    ...state,
    isLoaded: true,
    isLoading: false,
    // wordsData: payload,
    wordsData: {
      totalCount: payload.totalCount,
      wordsList: payload.data,
      currentPage: payload.currentPage,
      itemsPerPage: payload.itemsPerPage,
      sortBy: payload.sortBy,
      direction: payload.direction,
    },
  }),
  [GET_WORDS_FAILURE]: state => ({
    ...state,
    isLoaded: false,
    isLoading: false,
    error: true,
  }),
  [CLEAR_WORDS]: state => ({
    ...state,
    ...initialState,
  }),
});
