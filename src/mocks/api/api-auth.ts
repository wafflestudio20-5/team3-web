import { rest } from 'msw';
// const API_URL = 'localhost:8080';

import { mockEmailCheck } from '../data/auth';

// DESC: src/mocks/api/... -> 카테고리별 요청 핸들러
export const emailCheckAPI = [
  // DESC: 요청 method, 요쳥 주소, 요청 data, 응답 (status, delay, 응답받는 데이터 등) 설정 가능
  rest.get(`/auth/checkEmail`, (req, res, ctx) => {
    const email = req.url.searchParams.get('email');
    console.log(email);
    return res(ctx.status(200), ctx.delay(2000), ctx.json(mockEmailCheck));
  }),

  // other...
];
