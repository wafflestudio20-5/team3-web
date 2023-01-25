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
  margin-top: 80px;
  margin-bottom: 60px;
  gap: 16px;

  @media ${MD_SIZE} {
    margin-top: 40px;
    margin-bottom: 40px;
  }
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
  font-weight: ${isCurrent ? 600 : 400}
`,
);
