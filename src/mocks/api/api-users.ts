import { rest } from 'msw';
// const API_URL = 'localhost:8080';

import { mockUser1, mockUserMe, mockModifiedUserMe } from '../data/users';

export const usersAPI = [
  rest.get(`/users/me`, (req, res, ctx) => {
    // CASE 1: 액세스 토큰 없는 경우, code - 401
    if (!req.headers.get('Authorization')) {
      return res(ctx.status(401), ctx.delay(3000));
    }
    // CASE 2: 정상 케이스
    return res(ctx.status(200), ctx.delay(3000), ctx.json(mockUserMe));
  }),

  rest.get(`/users/${1}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(3000), ctx.json(mockUser1));
  }),

  rest.patch(`/users/me`, (req, res, ctx) => {
    // CASE 1: 액세스 토큰 없는 경우, code - 401
    if (!req.headers.get('Authorization')) {
      return res(ctx.status(401), ctx.delay(3000));
    }
    // CASE 2: 정상 케이스
    return res(ctx.status(200), ctx.delay(3000), ctx.json(mockModifiedUserMe));
  }),

  rest.put(`/users/me/password`, (req, res, ctx) => {
    // CASE 1: 액세스 토큰 없는 경우, code - 401
    if (!req.headers.get('Authorization')) {
      return res(ctx.status(401), ctx.delay(3000));
    }

    // CASE 2: 정상 케이스
    return res(ctx.status(200), ctx.delay(3000));
  }),
];
