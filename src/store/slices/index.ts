import { combineReducers } from '@reduxjs/toolkit';
import chatSlice from './chatSlice';
import usersSlice from './usersSlice';
import sessionSlice from './sessionSlice';
import tradePostSlice from './tradePostSlice';
import commentsSlice from './neighborhoodSlice';
import neighborhoodPostSlice from './neighborhoodPostSlice';
import neighborhoodPostListSlice from './neighborhoodPostListSlice';

const rootReducer = combineReducers({
  chat: chatSlice,
  users: usersSlice,
  session: sessionSlice,
  tradePost: tradePostSlice,
  comments: commentsSlice,
  neighborhoodPost: neighborhoodPostSlice,
  neighborhoodPostList: neighborhoodPostListSlice,
});

export default rootReducer;
