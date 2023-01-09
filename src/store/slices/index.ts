import { combineReducers } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';

const rootReducer = combineReducers({
  users: usersSlice,
});

export default rootReducer;
