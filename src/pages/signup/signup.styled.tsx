import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { COLOR_CARROT } from '../../constant';
import { Button } from '../../components/button-normal/button-normal.styled';

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100vw;
  height: auto;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  width: 375px;
  margin-top: 74px;
`;

export const Logo = styled.img`
  width: 197px;
  height: 52px;
`;

export const Subtitle = styled.h1`
  margin-top: 18px;
  font-family: 'Pretendard-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 18px;
  color: #000000;
`;

export const InformWrapper = styled.div`
  display: flex-end;
  width: 80%;
`;

export const InformSpan = styled.span`
  display: block;
  font-size: 16px;
`;

export const SignUpInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 74px;
`;

export const SignUpInput = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 3px 0px;
`;

export const InputIcon = styled.img`
  position: absolute;
  width: 15px;
  height: 17px;
  left: 16px;
  top: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px 0px;
  border: none;
  background: #ebe9e9;
  font-size: 18px;
  transition: border-bottom 0s ease-out 0s;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${COLOR_CARROT};
    transition-duration: 0.5s;
  }
`;

export const SignUpInputLeft = styled.div`
  flex: 9;
  position: relative;
  margin-right: 7px;
  &:last-of-type {
    margin-right: 0px;
  }
`;

interface Span extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

export const SignUpInputSpan = styled.span<Span>(
  ({ color }) => `
  height: 18px;
  color: ${color || 'rgba(0,0,0)'};
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  padding-left: 2px;
`,
);

export const SignUpInputRight = styled.div`
  flex: 1;
  min-width: 100px;
`;

export const SignUpButton = styled(Button)`
  width: 100px;
  height: 50px;
  background: #d0d0d0;
  border-radius: 5px;
  color: #000;
  border: none;
  transition: 0.3s all;
  font-size: 14px;
  line-height: 18px;

  &:hover {
    color: #fff;
    background-color: ${COLOR_CARROT};
  }
`;

export const SignUpButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 64px;
`;

export const SubmitButton = styled.button`
  width: 151px;
  height: 44px;
  background-color: ${COLOR_CARROT};
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.19);
  border-radius: 30px;
  font-weight: 700;
  font-size: 17px;
  line-height: 18px;
  color: #ffffff;
  transition: 0.3s all;

  &:hover {
    transform: translateY(-3px);
  }
`;

interface Span extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

export const Span = styled.span<Span>(
  ({ color }) => `
  display: inline-block;,
  color: ${color || 'rgba(0,0,0,0)'};
  margin-top: -15px;
`,
);

// DESC: 이메일 인증
export const P = styled.p`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  color: #000000;
  margin-bottom: 6px;
  padding-left: 2px;
`;

export const EmailAuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`;

export const EmailInnerWrapper = styled.div`
  display: flex;
  gap: 18px;
`;

export const InputPositionWrapper = styled.div`
  position: relative;
  width: 161px;
  height: 35px;
`;

export const EmailVerifyInput = styled.input`
  width: 161px;
  height: 35px;
  border: none;
  border-bottom: 1.2px solid #b6b5b5;
  padding-left: 4px;
  font-size: 14px;
  line-height: 17px;
  color: #000;

  &::placeholder {
    color: #949494;
  }
  -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
  box-shadow: 0 0 0 1000px #ffffff inset;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${COLOR_CARROT};
    transition-duration: 0.5s;
  }
`;

interface Span extends HTMLAttributes<HTMLElement> {
  isTimesUp?: boolean;
}

export const Timer = styled.span<Span>(
  ({ isTimesUp }) => `
  position: absolute;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${isTimesUp ? '#D94D11' : '#000'};
  top: 10px;
  right: 5px;
`,
);

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 7px;
`;

interface Button extends HTMLAttributes<HTMLElement> {
  isVerifyButton?: boolean;
  isEmailAuthed?: boolean;
}

export const EmailVerifyButton = styled.button<Button>(
  ({ isVerifyButton, isEmailAuthed }) => `
  width: auto;
  height: 35px;
  border-radius: 5px;
  padding: 0 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  transition: 0.3s all;
  color: ${isEmailAuthed && isVerifyButton ? '#fff' : '#949494'};
  background: ${isEmailAuthed && isVerifyButton ? '#E78111' : '#fff'};
  border: ${isEmailAuthed && isVerifyButton ? 'none' : '1px solid #aaaaaa'};

  &:hover {
    background: #f3f3f3;
    color: #373737;
  }

  ${
    isEmailAuthed &&
    isVerifyButton &&
    '&:hover { background: #E78111; color: #fff; cursor: default; }'
  }
`,
);
