import { combineReducers } from '@reduxjs/toolkit';
import chatSlice from './chatSlice';
import usersSlice from './usersSlice';
import sessionSlice from './sessionSlice';
import tradePostSlice from './tradePostSlice';

const rootReducer = combineReducers({
  chat: chatSlice,
  users: usersSlice,
  session: sessionSlice,
  tradePost: tradePostSlice,
});

export default rootReducer;
