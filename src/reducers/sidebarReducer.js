import { createReducer } from '../utils';
import { TOGGLE_SIDEBAR_REQUEST, TOGGLE_SIDEBAR_SUCCESS } from '../constants';

const initialState = {
  isOpen: true,
};

export default createReducer(initialState, {
  [TOGGLE_SIDEBAR_REQUEST]: state => ({
    ...state,
  }),
  [TOGGLE_SIDEBAR_SUCCESS]: (state, payload) => ({
    ...state,
    isOpen: payload,
  }),
});
