// DESC: 비밀번호 형식에 맞는 난수를 생성하는 함수 (소셜로그인 시 사용자의 비밀번호로 활용)

import { valPassword } from './validateUserInfo';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialSymbols = '$@$!%*#?&';

export const randomPassword = (): string => {
  let password = '';
  for (let i = 0; i < 10; i++) {
    password += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  for (let i = 0; i < 3; i++) {
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  for (let i = 0; i < 2; i++) {
    password += specialSymbols.charAt(
      Math.floor(Math.random() * specialSymbols.length),
    );
  }
  // DESC: 비밀번호 형식에 맞지 않다면 형식에 맞도록 비밀번호 다시 생성(형식은 맞을 텐데 혹시 몰라서..)
  while (!valPassword(password)) {
    password = randomPassword();
  }

  return password;
};
