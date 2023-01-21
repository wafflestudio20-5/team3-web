import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';

// DESC: configureStore로 생성된 store - 다양한 기능을 갖춘 store, state들을 관리하는 공간
const store = configureStore({
  // DESC: rootReducer <- 우리의 redux state들 모음, slice들의 집합
  reducer: rootReducer,
  // DESC: non-serialized value 에러 발생해서 미들웨어 추가
  // 참고: https://velog.io/@pest95/RTK-non-serializable-value-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// DESC: store의 타입 사용시
export type StoreType = typeof store;

// DESC: dispatch의 타입 사용시
export type AppDispatch = typeof store.dispatch;

// DESC: 기본 state의 타입 사용시
export type RootState = ReturnType<typeof store.getState>;

export default store;
