import axios from 'axios';
import { BASE_URL } from '../constant';
import { LoginRequest, LoginInput } from '../types/auth';

export const requestCheckEmail = async (email: string) => {
  try {
    return await axios.get(`${BASE_URL}/auth/checkEmail`, {
      params: { email: email },
    });
  } catch (e) {
    return e;
  }
};

export const requestSendEmail = async (email: string) => {
  try {
    return await axios.get(`${BASE_URL}/auth/sendVerificationEmail`, {
      params: { email: email },
    });
  } catch (e) {
    return e;
  }
};

export const requestAuthEmail = async (email: string) => {
  try {
    return await axios.get(`${BASE_URL}/auth/checkEmailVerified`, {
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

export const requestLogin = async ({ email, password }: LoginInput) => {
  try {
    return await axios.post(`${BASE_URL}/auth/login`, {
      email: email,
      password: password,
    });
  } catch (e) {
    return e;
  }
};

export const requestGoogleLogin = async (email: string | null) => {
  try {
    return await axios.post(`${BASE_URL}/google/login/`, { email: email });
  } catch (e) {
    return e;
  }
};

export const requestKakaoLogin = async (code: string | null) => {
  try {
    console.log(code);
    return await axios.get(`${BASE_URL}/kakao/lgoin?code=${code}`);
  } catch (e) {
    return e;
  }
};
