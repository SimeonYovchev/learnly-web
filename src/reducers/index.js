import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './usersReducer';
import wordsReducer from './wordsReducer';
import wordReducer from './wordReducer';
import sidebarReducer from './sidebarReducer';

export default combineReducers({
  authReducer,
  userReducer,
  wordsReducer,
  wordReducer,
  sidebarReducer,
});
