// DESC: 만든 slice(reducer + action)들을 합쳐주는 곳

import { combineReducers } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';

// DESC: 여러 종류의 slice들을 여기서 합쳐줌
const rootReducer = combineReducers({
  users: usersSlice,
});

export default rootReducer;
