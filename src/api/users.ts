import axios from 'axios';
import { auth } from '.';
import { BASE_URL } from '../constant';
import { User } from '../types/users';

// DESC: users에서 API 요청시 실제 쓰이지 않음, 후에 삭제 예정
export const requestMyInfo = (token: string) => {
  return axios.get<User>(`${BASE_URL}/users/me`, {
    headers: auth(token),
  });
};

export const requestUserInfo = (userId: number) => {
  return axios.get<User>(`${BASE_URL}/users/${userId}`);
};

export const requestUpdateMyInfo = (
  token: string,
  username: string | null,
  location: string | null,
  imgUrl: string | null,
) => {
  return axios.patch<User>(
    `${BASE_URL}/users/me`,
    { username, location, imgUrl },
    { headers: auth(token) },
  );
};

export const requestUpdateMPassword = async (
  token: string,
  password: string,
  newPassword: string,
  newPasswordConfirm: string,
) => {
  return axios.put<User>(
    `${BASE_URL}/users/me/password`,
    { password, newPassword, newPasswordConfirm },
    { headers: auth(token) },
  );
};
