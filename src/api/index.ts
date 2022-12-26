import { BASE_URL } from '../constant';

// DESC: api util 관련 함수 모음
export const url = (path: string, param?: Record<string, string>) =>
  (process.env.NODE_ENV === 'production' ? `${BASE_URL}${path}` : path) +
  (param ? '?' + new URLSearchParams(param).toString() : '');

export const auth = (token: string) => ({ Authorization: `Bearer ${token}` });
