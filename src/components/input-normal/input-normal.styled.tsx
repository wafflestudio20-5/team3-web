import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Input extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const Input = styled.input<Input>(
  ({ placeholder }) => `
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  padding: 5px 10px;
  display: block;
  height: 50px;
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0px;
  }
  placeholder: ${placeholder};
`,
);
