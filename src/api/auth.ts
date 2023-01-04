import axios from 'axios';

// export const requestMyInfo = async (token: string) => {
//     // TODO: url('/users/me')
//     try {
//       return await axios.get<User>('/users/me', { headers: auth(token) });
//     } catch (e) {
//       return null;
//     }
//   };

export const requestCheckEmail = async (email: string) => {
  try {
    return await axios.get(
      process.env.NODE_ENV === 'development'
        ? '/auth/checkEmail'
        : 'http://3.35.168.70/auth/checkEmail',
      { params: { email: email } },
    );
  } catch (e) {
    return e;
  }
};

export const requestCheckUsername = async (username: string) => {
  try {
    return await axios.get(
      process.env.NODE_ENV === 'development'
        ? '/auth/checkUsername'
        : 'http://3.35.168.70/auth/checkUsername',
      { params: { username: username } },
    );
  } catch (e) {
    return e;
  }
};

export const requestSignUpUser = async (
  email: string,
  password: string,
  username: string,
  location?: string,
) => {
  try {
    return await axios.post(
      process.env.NODE_ENV === 'development'
        ? '/auth/signup'
        : 'http://3.35.168.70/auth/signup',
      {
        email: email,
        password: password,
        username: username,
        location: location,
      },
    );
  } catch (e) {
    return e;
  }
};
