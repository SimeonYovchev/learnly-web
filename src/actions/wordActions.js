import {
  GET_WORD_REQUEST,
  GET_WORD_SUCCESS,
  GET_WORD_FAILURE,
  CREATE_WORD_REQUEST,
  CREATE_WORD_SUCCESS,
  CREATE_WORD_FAILURE,
  CLEAR_WORD,
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

export const createWordRequest = () => ({ type: CREATE_WORD_REQUEST });

export const createWordSuccess = (word) => {
  return {
    type: CREATE_WORD_SUCCESS,
    payload: word,
  };
};

export const createWordFailure = () => ({ type: CREATE_WORD_FAILURE });

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

export const createWord = (word, history) => {
  return (dispatch) => {
    dispatch(createWordRequest());

    httpService.post('/words', word) // extract this call into service
      // .then((response) => {
      //   console.log(response);
      //   return response;
      // })
      .then(response => dispatch(createWordSuccess(response.data)))
      .then(() => history.replace('/words'))
      .catch((error) => {
        console.log(error);
        dispatch(createWordFailure(error));
      });
  };
};

export const clearWord = () => ({ type: CLEAR_WORD });
