export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

const EMAIL_REG =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const PASSWORD_REG =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
const USERNAME_REG = /^([a-zA-Z0-9가-힣]){2,10}$/;

export const validateEmail = (email: string) => {
  if (email === '') {
    return '';
  } else if (EMAIL_REG.test(email) === false) {
    return '올바르지 않은 형식의 이메일입니다.';
  } else {
    return '사용 가능한 형식의 이메일입니다.';
    // axios
    //   .get(
    //     process.env.NODE_ENV === 'development'
    //       ? '/hello'
    //       : 'http://3.35.168.70/hello',
    //   )
    //   .then(res => console.log(res));
    // axios
    //   .get(
    //     process.env.NODE_ENV === 'development'
    //       ? '/auth/checkEmail'
    //       : 'http://3.35.168.70/auth/checkEmail',
    //     { params: { email: email } },
    //   )
    //   .then(res => {
    //     console.log(res);
    //     if (res.data) {
    //       // console.log('중복 없음 블록 실행');
    //       return '사용 가능한 이메일입니다.';
    //     } else {
    //       return '이미 동일한 이메일이 등록되어 있습니다.';
    //     }
    //   });
  }
};

export const validatePassword = (password: string) => {
  if (password === '') {
    return '';
  } else if (PASSWORD_REG.test(password) === false) {
    return '비밀번호는 영어, 숫자, 특수문자(!@#$%^&+=)를 모두 포함한 8~20자리여야 합니다.';
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
  if (username === '') {
    return '';
  } else if (USERNAME_REG.test(username) === false) {
    return '닉네임은 한글, 영어, 숫자 중 하나를 포함한 형태의 2~10자리여야 합니다.';
  } else {
    return '사용가능한 형식의 닉네임입니다.';
  }
};

export const validAllInputs = (
  email: string,
  password: string,
  passwordConfirm: string,
  username: string,
) => {
  if (
    EMAIL_REG.test(email) &&
    PASSWORD_REG.test(password) &&
    password === passwordConfirm &&
    USERNAME_REG.test(username)
  ) {
    return true;
  } else return false;
};
