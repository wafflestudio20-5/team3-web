import { combineReducers } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';
import sessionSlice from './sessionSlice';

const rootReducer = combineReducers({
  users: usersSlice,
  session: sessionSlice,
});

export default rootReducer;
