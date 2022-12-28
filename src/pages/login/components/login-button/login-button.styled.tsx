import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Button extends HTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  color?: string;
}

export const Button = styled.button<Button>(
  ({ bgColor, color }) => `
    display: flex;
    width: 350px;
    height: 50px;
    color: ${color || 'black'};
    background-color: ${bgColor || '#fff'};
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-radius: 12px;
    gap: 8px;
`,
);

export const Img = styled.img`
  width: 20px;
  height: 20px;
`;

export const Span = styled.span`
  line-height: 50px;
  font-size: 18px;
  font-weight: 600;
`;
