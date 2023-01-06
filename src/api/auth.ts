import axios from 'axios';
import { BASE_URL } from '../constant';
import { LoginRequest } from '../types/auth';

export const requestCheckEmail = async (email: string) => {
  try {
    return await axios.get(`${BASE_URL}/auth/checkEmail`, {
      params: { email: email },
    });
  } catch (e) {
    return e;
  }
};

export const requestCheckUsername = async (username: string) => {
  try {
    return await axios.get(`${BASE_URL}/auth/checkUsername`, {
      params: { username: username },
    });
  } catch (e) {
    return e;
  }
};

export const requestSignUpUser = async ({
  email,
  password,
  username,
  location,
}: LoginRequest) => {
  try {
    return await axios.post(`${BASE_URL}/auth/signup`, {
      email: email,
      password: password,
      username: username,
      location: location,
    });
  } catch (e) {
    return e;
  }
};
