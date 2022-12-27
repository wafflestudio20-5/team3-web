import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SignUpButtonWrapper = styled.div`
  width: 10%;
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
