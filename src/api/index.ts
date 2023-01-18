import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constant';
import { loadItem } from '../utils/storage';

// DESC: api util 관련 함수 모음
export const url = (path: string, param?: Record<string, string>) =>
  (process.env.NODE_ENV === 'production' ? `${BASE_URL}${path}` : path) +
  (param ? '?' + new URLSearchParams(param).toString() : '');

export const auth = (token: string) => ({ Authorization: `Bearer ${token}` });

// 🚀❓ DESC: Response interceptor for API calls
export const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.response.use(
  (response: AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = loadItem('refreshToken');
      if (refreshToken) {
        const res = await axios.post(`${BASE_URL}/auth/refresh`, {
          refreshToken,
        });

        originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);
