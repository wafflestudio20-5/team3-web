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
  gap: 14px;

  @media ${MD_SIZE} {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const Move = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 300px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 400;
  transition: 0.3s all;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #eeeeee;
  }
`;

export const More = styled.span`
  color: #7d7d7d;
`;

export const Button = styled.button<Button>(
  ({ isCurrent }) => `
  width: 36px;
  height: 36px;
  border-radius: 300px;
  color: ${isCurrent ? '#4e4e4e' : '#7d7d7d'};
  background-color: ${isCurrent ? '#eeeeee' : 'transparent'};
  font-size: 16px;
  font-weight: ${isCurrent ? 600 : 400};
  
  &:hover {
    background: #eeeeee;
  }
`,
);

export const MoveIcon = styled.img`
  width: 22px;
  height: 22px;
`;
