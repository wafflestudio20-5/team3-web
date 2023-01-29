import user from '../assets/signup-user.svg';
import email from '../assets/signup-email.svg';
import location from '../assets/signup-email.svg';
import password from '../assets/signup-password.svg';

//DESC: 유저 정보가 형식에 맞는지 검사해주는 함수들
const EMAIL_REG =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const PASSWORD_REG =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
const USERNAME_REG = /^([a-zA-Z0-9가-힣]){2,10}$/;

export const valEmail = (email: string): boolean => {
  return EMAIL_REG.test(email);
};

export const valPassword = (password: string): boolean => {
  return PASSWORD_REG.test(password);
};

export const valUsername = (username: string): boolean => {
  return USERNAME_REG.test(username);
};

export const validAllInputs = (
  email: string,
  password: string,
  passwordConfirm: string,
  username: string,
) => {
  return (
    valEmail(email) &&
    valPassword(password) &&
    password === passwordConfirm &&
    valUsername(username)
  );
};

// DESC: 위의 함수를 이용한 부가적인 함수,
// 회원가입 input 입력시 형식에 맞지 않다면 메세지를 string 형식으로 return
export const valEmailToMsg = (email: string): string => {
  if (email === '') {
    return '';
  } else if (!valEmail(email)) {
    return '올바르지 않은 형식의 이메일입니다.';
  } else {
    return '사용 가능한 형식의 이메일입니다.';
  }
};

export const valPasswordToMsg = (password: string): string => {
  if (password === '') {
    return '';
  } else if (!valPassword(password)) {
    return '비밀번호는 영어, 숫자, 특수문자(!@#$%^&+=)를 모두 포함한 8~20자리여야 합니다.';
  } else {
    return '사용 가능한 비밀번호입니다.';
  }
};

export const confirmPasswordToMsg = (
  password: string,
  passwordConfirm: string,
): string => {
  if (passwordConfirm === '') {
    return '';
  } else if (password === passwordConfirm) {
    return '비밀번호가 일치합니다.';
  } else {
    return '비밀번호가 일치하지 않습니다.';
  }
};

export const valUsernameToMsg = (username: string): string => {
  if (username === '') {
    return '';
  } else if (!valUsername(username)) {
    return '닉네임은 한글, 영어, 숫자 중 하나를 포함한 형태의 2~10자리여야 합니다.';
  } else {
    return '사용가능한 형식의 닉네임입니다.';
  }
};

export const getSignupIcon = (valueName: string) => {
  switch (valueName) {
    case 'email':
      return email;
    case 'password':
      return password;
    case 'passwordConfirm':
      return password;
    case 'username':
      return user;
    default:
      return location;
  }
};
