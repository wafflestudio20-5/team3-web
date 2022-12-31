import { rest } from 'msw';
// const API_URL = 'localhost:8080';

import { mockUser } from '../data/users';

// DESC: src/mocks/api/... -> 카테고리별 요청 핸들러
export const usersAPI = [
  // DESC: 요청 method, 요쳥 주소, 요청 data, 응답 (status, delay, 응답받는 데이터 등) 설정 가능
  rest.get(`/profile/1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(3000), ctx.json(mockUser));
  }),

  // other...
];
