import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  width: auto;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;
`;

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
`;

interface CategoryProps extends HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
}

export const Category = styled.span<CategoryProps>(
  ({ selected }) => `
  display: flex;
  align-items: center;
  width: auto;
  margin-top: 2px;
  margin-right: 28px;
  font-weight: 600;
  font-size: 16px;
  color: ${selected ? '#ff6f0f' : '#000'};
  transition: all 0.3s;

  &:hover {
    color: #ff6f0f;
  }
`,
);

export const Login = styled.span<CategoryProps>(
  ({ selected }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: ${selected ? 'rgba(0, 18, 68, 0.05)' : '#fff'};
  border: 1px solid #d1d3d8;
  border-radius: 5px;
  color: ${selected ? '#555' : '#000'};
  font-weight: 500;
  transition: all 0.5s;

  &:hover {
    background-color: rgba(0, 18, 68, 0.05);
    color: #555;
  }
`,
);
