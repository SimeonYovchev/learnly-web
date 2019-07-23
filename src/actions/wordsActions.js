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

export const getWords = () => {
  return (dispatch) => {
    dispatch(getWordsRequest());

    httpService.get('/words') // extract this call into service
      .then((response) => {
        console.log(response);
        return response;
      })
      .then(response => dispatch(getWordsSuccess(response.data)))
      .catch(error => dispatch(getWordsFailure(error)));
  };
};

export const clearWords = () => ({ type: CLEAR_WORDS });
