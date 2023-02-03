import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Button extends HTMLAttributes<HTMLButtonElement> {
  tradeStatus?: string;
}

export const Button = styled.button<Button>(
  ({ tradeStatus }) => `
  background-color: ${tradeStatus === 'RESERVATION' ? '#12b886' : '#ced4da'};
  color: ${tradeStatus === 'RESERVATION' ? 'white' : 'black'};
  border: 0px solid transparent;
  border-radius: 6px;
  height: 22px;
  width: auto;
  padding: 5px 7px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  line-height: 10px;
  margin-right: 6px;
`,
);
