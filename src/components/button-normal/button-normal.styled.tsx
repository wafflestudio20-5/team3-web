import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Button extends HTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
}

export const Button = styled.button<Button>(
  ({ bgColor }) => `
  background-color: ${bgColor || '#fff'};
  border: 1px solid #8a8a8a;
  border-radius: 5px;
  padding: 5px 10px;
  height: 30px;
  width: auto;

  font-weight: 400;
  font-size: 15px;
  line-height: 20px;

  margin-right: 10px;

  &:last-of-type {
    margin-right: 0px;
  }
`,
);
