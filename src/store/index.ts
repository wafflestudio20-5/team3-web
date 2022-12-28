import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';

// DESC: configureStore로 생성된 store - 다양한 기능을 갖춘 store, state들을 관리하는 공간
const store = configureStore({
  // DESC: rootReducer <- 우리의 redux state들 모음, slice들의 집합
  reducer: rootReducer,
});

// DESC: store의 타입 사용시
export type StoreType = typeof store;

// DESC: dispatch의 타입 사용시
export type AppDispatch = typeof store.dispatch;

// DESC: 기본 state의 타입 사용시
export type RootState = ReturnType<typeof store.getState>;

export default store;
