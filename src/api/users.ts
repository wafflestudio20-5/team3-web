import axios from 'axios';
import { auth, url } from '.';
import { User } from '../types/users';

export const requestMyInfo = async (token: string) => {
  // TODO: url('/users/me')
  try {
    return await axios.get<User>('/users/me', { headers: auth(token) });
  } catch (e) {
    return null;
  }
};

export const requestUserInfo = async (userId: number) => {
  // TODO: url(`/users/${userId}`)
  try {
    return await axios.get<User>(`/users/${userId}`);
  } catch (e) {
    return null;
  }
};

export const requestUpdateMyInfo = async (
  token: string,
  username: string | null,
  location: string | null,
  imgUrl: string | null,
) => {
  // TODO: url('/users/me')
  try {
    return await axios.patch<User>(
      '/users/me',
      { username, location, imgUrl },
      { headers: auth(token) },
    );
  } catch (e) {
    return null;
  }
};

export const requestUpdateMPassword = async (
  token: string,
  password: string,
  newPassword: string,
  newPasswordConfirm: string,
) => {
  try {
    // TODO: url('/users/me/password')
    return await axios.put<User>(
      '/users/me/password',
      { password, newPassword, newPasswordConfirm },
      { headers: auth(token) },
    );
  } catch (e) {
    return null;
  }
};
