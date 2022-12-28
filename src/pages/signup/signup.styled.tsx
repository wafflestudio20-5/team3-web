import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button-normal/button-normal.styled';

export const Wrapper = styled.div`
  width: 100%;
  min-width: 360px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SignUpInputWrapper = styled.div`
  display: block;
  width: 80%;
  margin: 10px;
`;

export const SignUpInput = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0px;
`;

export const SignUpInputLeft = styled.div`
  flex: 9;
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0px;
  }
`;

export const SignUpInputRight = styled.div`
  flex: 1;
  min-width: 100px;
`;

export const SignUpButton = styled(Button)`
  height: 50px;
  color: white;
  width: 100%;
`;

export const SignUpButtonWrapper = styled.div`
  width: 100px;
`;

export const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

interface Span extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

export const Span = styled.span<Span>(
  ({ color }) => `
color: ${color || 'rgba(0,0,0,0)'};
margin-top: -15px;
display: inline-block;`,
);
