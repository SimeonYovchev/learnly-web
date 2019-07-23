import {
  GET_WORD_REQUEST,
  GET_WORD_SUCCESS,
  GET_WORD_FAILURE,
} from '../constants';
import httpService from '../services/httpService';

export const getWordRequest = () => ({ type: GET_WORD_REQUEST });
export const getWordSuccess = (word) => {
  return {
    type: GET_WORD_SUCCESS,
    payload: word,
  };
};
export const getWordFailure = () => ({ type: GET_WORD_FAILURE });

export const getWord = (wordId) => {
  return (dispatch) => {
    dispatch(getWordRequest());

    httpService.get(`/words/${wordId}`) // extract this call into service
      .then((response) => {
        console.log(response);
        return response;
      })
      .then(response => dispatch(getWordSuccess(response.data)))
      .catch(error => dispatch(getWordFailure(error)));
  };
};
