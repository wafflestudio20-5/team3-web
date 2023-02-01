import axios, { AxiosResponse } from 'axios';
import { redirect, useNavigate } from 'react-router';
import { BASE_URL } from '../constant';
import { useAppDispatch } from '../store/hooks';
import { postRefresh } from '../store/slices/sessionSlice';
import { loadItem } from '../utils/storage';
import { redirectWithMsg } from '../utils/errors';

// DESC: api util 관련 함수 모음
export const url = (path: string, param?: Record<string, string>) =>
  (process.env.NODE_ENV === 'production' ? `${BASE_URL}${path}` : path) +
  (param ? '?' + new URLSearchParams(param).toString() : '');

export const auth = (token: string | null) => ({ Authorization: `Bearer ${token}` });

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

// DESC: 22.02.01 interceptor for 401

export const axiosI = axios.create({
  baseURL: BASE_URL,
});

axiosI.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: any) => {
    const originalRequest = error.cofig;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const dispatch = useAppDispatch();
      const navigate = useNavigate();
      const refreshToken = loadItem('refreshToken');

      try {
        if (refreshToken) {
          await dispatch(postRefresh(refreshToken));
          const newToken = loadItem('accessToken');
          const authNewToken = auth(newToken as string).Authorization;
          axiosI.defaults.headers.common.Authorization = authNewToken;
          originalRequest.headers.Authorization = authNewToken;
          return axiosI(originalRequest);
        } else {
          redirectWithMsg(1, '로그인이 필요합니다', () => navigate('/login'));
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  },
);
