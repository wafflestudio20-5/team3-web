import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { COLOR_CARROT } from '../../../../constant';

interface Input extends HTMLAttributes<HTMLInputElement> {
  color?: string;
}

export const Input = styled.input<Input>(
  ({ color }) => `
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-left: 42px;
  border: none;
  border-radius: 5px;
  background: #EBE9E9;
  color: ${color || 'tomato'};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  &::placeholder {
    color: #949494;
  }

  // DESC: 👇 자동완성 시 background color 바뀌는 현상 해결
  -webkit-box-shadow: 0 0 0 1000px #EBE9E9 inset;
  
  &:focus {
    outline: none;
    // border-bottom: 1px solid ${COLOR_CARROT};
    // transition-duration: 0.5s;
  }
`,
);
