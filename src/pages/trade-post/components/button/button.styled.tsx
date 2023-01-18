import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Button extends HTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
}

export const Wrapper = styled.button<Button>(
  ({ bgColor }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 40px;
  padding: 0 18px;
  margin-right: 8px;
  background-color: ${bgColor || 'rgb(241, 241, 242)'};
  border: 1px solid rgb(241, 241, 242);
  border-radius: 6px;
  transition: all 0.3s;
  color: ${bgColor ? '#fff' : '#000'};

  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    background-color: ${bgColor || 'rgb(241, 241, 242)'};
    transform: translateY(-2px);
  }
`,
);

export const Text = styled.span`
  font-size: 13px;
  line-height: 21px;
  text-align: center;
`;
