import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button-normal/button-normal.styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100%;
  min-width: 360px;
  margin-top: 20px;
`;

export const SignUpInputWrapper = styled.div`
  display: block;
  width: 80%;
  max-width: 1200px;
  margin: 15px 10px;
`;

export const Label = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

export const SignUpInput = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0px;
`;

export const SignUpInputLeft = styled.div`
  flex: 9;
  position: relative;
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0px;
  }
`;

interface Span extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

export const SignUpInputSpan = styled.span<Span>(
  ({ color }) => `position: absolute;
  top: 50px;
  left: 10px;
  color: ${color || 'rgba(0,0,0)'};
  font-size: 16px;`,
);

export const SignUpInputRight = styled.div`
  flex: 1;
  min-width: 100px;
`;

export const SignUpButton = styled(Button)`
  width: 100%;
  height: 50px;
  color: white;
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
  display: inline-block;,
color: ${color || 'rgba(0,0,0,0)'};
margin-top: -15px;`,
);
