import httpService from '../services/httpService';
import {
  GET_WORDS_REQUEST,
  GET_WORDS_SUCCESS,
  GET_WORDS_FAILURE,
  CLEAR_WORDS,
} from '../constants';

export const getWordsRequest = () => ({ type: GET_WORDS_REQUEST });
export const getWordsSuccess = (words) => {
  return {
    type: GET_WORDS_SUCCESS,
    payload: words,
  };
};
export const getWordsFailure = () => ({ type: GET_WORDS_FAILURE });

export const getWords = (searchTerm, page, size, sortBy, direction) => {
  return (dispatch) => {
    dispatch(getWordsRequest());

    httpService.get(`/words?search=${searchTerm}&page=${page}&size=${size}&sortBy=${sortBy}&direction=${direction}`)
      .then((response) => {
        const payload = {
          ...response.data,
          searchTerm,
          currentPage: page,
          itemsPerPage: size,
          sortBy,
          direction,
        };
        return payload;
      })
      .then(response => dispatch(getWordsSuccess(response)))
      .catch(error => dispatch(getWordsFailure(error)));
  };
};

export const clearWords = () => ({ type: CLEAR_WORDS });
