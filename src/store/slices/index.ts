import { combineReducers } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';
import sessionSlice from './sessionSlice';
import tradePostSlice from './tradePostSlice';

const rootReducer = combineReducers({
  users: usersSlice,
  session: sessionSlice,
  tradePost: tradePostSlice,
});

export default rootReducer;
