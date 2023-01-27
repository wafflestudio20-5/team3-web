import { combineReducers } from '@reduxjs/toolkit';
import chatSlice from './chatSlice';
import usersSlice from './usersSlice';
import sessionSlice from './sessionSlice';
import tradePostSlice from './tradePostSlice';
import commentsSlice from './neighborhoodSlice';
import neighborhoodPostSlice from './neighborhoodPostSlice';

const rootReducer = combineReducers({
  chat: chatSlice,
  users: usersSlice,
  session: sessionSlice,
  tradePost: tradePostSlice,
  comments: commentsSlice,
  neighborhoodPost: neighborhoodPostSlice,
});

export default rootReducer;
