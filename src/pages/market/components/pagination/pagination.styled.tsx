import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  MD_SIZE,
  MD_to_XL_SIZE,
  SM_SIZE,
} from '../../../../constant/breakpoint';

interface Button extends HTMLAttributes<HTMLButtonElement> {
  isCurrent: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 60px;
  gap: 16px;

  @media ${MD_SIZE} {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const Move = styled.button`
  width: 36px;
  height: 24px;
  border: 0.5px solid gray;
  border-radius: 12px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 400;

  &:hover {
    box-shadow: 0 5px 10px #f1f1f1;
    transform: translateY(-2px);
  }
`;

export const More = styled.span`
  color: gray;
`;

export const Button = styled.button<Button>(
  ({ isCurrent }) => `
  width: 36px;
  height: 36px;
  border: 0.5px solid gray;
  border-radius: 12px;
  color: ${isCurrent ? 'black' : 'black'};
  background-color: ${isCurrent ? '#f1f3f5' : 'transparent'};
  font-size: 18px;
  font-weight: ${isCurrent ? 600 : 400};
  
  &:hover {
    box-shadow: 0 5px 10px #f1f1f1;
    transform: translateY(-2px);
  }
`,
);
