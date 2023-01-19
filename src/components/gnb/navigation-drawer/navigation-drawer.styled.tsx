import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: auto;
  margin-top: 25px;
  border-top: 1px solid #0000001b;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: auto;
  height: auto;
  padding: 10px 0;
`;

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #0000001b;
  padding: 10px 0;
`;

interface CategoryProps extends HTMLAttributes<HTMLElement> {
  selected?: boolean;
}

export const Category = styled.button<CategoryProps>(
  ({ selected }) => `
  height: 48px;
  margin-left: 10px;
  cursor: pointer;
  transition: 0.3s all;
  font-weight: 500;

  color: ${selected ? '#FF7E36' : '#000'};
  &:hover {
    color: #FF7E36;
  }
`,
);

export const Underline = styled.span`
  text-decoration: underline;
`;

export const Empha = styled.span`
  font-family: 'LINESeedKR-Bd';
  font-weight: 600;
`;
