import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button-normal/button-normal.styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 360px;
  height: 100vh;
`;

export const SignUpInputWrapper = styled.div`
  display: block;
  width: 80%;
  max-width: 1200px;
  margin: 10px;
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
  color: ${color || 'rgba(0,0,0)'};`,
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

export const ProfileLabel = styled.label`
  display: inline-block;
  margin: 5px 0 20px 0;
  font-weight: bold;
  font-size: 13px;
  color: #0095f6;
  cursor: pointer;
`;

export const ProfileInput = styled.input`
  display: none;
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const PostcodeWrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  margin-bottom: 20px;
`;

export const PostcodeButton = styled(Button)`
  color: black;
`;
