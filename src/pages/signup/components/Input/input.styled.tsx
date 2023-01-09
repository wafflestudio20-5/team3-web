import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { COLOR_CARROT } from '../../../../constant';

interface Input extends HTMLAttributes<HTMLInputElement> {
  color?: string;
}

export const Input = styled.input<Input>(
  ({ color }) => `
width: 100%;
height: 50px;
padding: 10px 0px;
border: none;
border-bottom: 1px solid #ccc;
background-color: transparent;
color: ${color || 'tomato'};
font-size: 18px;

transition: border-bottom 0s ease-out 0s;
// DESC: 👇자동완성 시 background color 바뀌는 현상 해결
-webkit-box-shadow: 0 0 0 1000px white inset;
&:focus {
  outline: none;
  border-bottom: 1px solid ${COLOR_CARROT};
  transition-duration: 0.5s;
}
`,
);
