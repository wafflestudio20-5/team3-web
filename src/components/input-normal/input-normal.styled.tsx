import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Input extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const Input = styled.input<Input>(
  ({ placeholder }) => `
  display: block;
  width: 100%;
  height: 50px;
  padding: 5px 10px;
  margin-right: 10px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  placeholder: ${placeholder};
  &:last-of-type {
    margin-right: 0px;
  }
`,
);
