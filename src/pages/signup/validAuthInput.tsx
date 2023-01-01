import axios from 'axios';

export const validateEmail = (email: string) => {
  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
  if (email === '') {
    return '';
  } else if (reg.test(email) === false) {
    return '올바르지 않은 형식의 이메일입니다.';
  } else {
    axios
      .get(
        process.env.NODE_ENV === 'development'
          ? '/hello'
          : 'http://3.35.168.70/hello',
      )
      .then(res => console.log(res));
    axios
      .get(
        process.env.NODE_ENV === 'development'
          ? '/auth/checkEmail'
          : 'http://3.35.168.70/auth/checkEmail',
        { params: { email: email } },
      )
      .then(res => console.log(res));
  }
};

export const validatePassword = (password: string) => {
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  if (password === '') {
    return '';
  } else if (reg.test(password) === false) {
    return '비밀번호는 영어, 숫자, 특수문자(!@#$%^&+=)를 모두 포함한 8~15자리여야 합니다.';
  } else {
    return '사용 가능한 비밀번호입니다.';
  }
};

export const authPassword = (password: string, passwordConfirm: string) => {
  if (passwordConfirm === '') {
    return '';
  } else if (password === passwordConfirm) {
    return '비밀번호가 일치합니다.';
  } else {
    return '비밀번호가 일치하지 않습니다.';
  }
};

export const validateUsername = (username: string) => {
  const reg = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;
  if (username === '') {
    return '';
  } else if (reg.test(username) === false) {
    return '유저명은 한글, 영어, 숫자 중 하나를 포함한 형태의 2~10자리여야 합니다.';
  } else {
    axios
      .get(
        process.env.NODE_ENV === 'development'
          ? '/auth/checkUsername'
          : 'http://3.35.168.70/auth/checkUsername',
        { params: { username: 'dmad' } },
      )
      .then(res => console.log(res));
  }
};
