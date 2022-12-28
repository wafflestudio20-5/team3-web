import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { MD_SIZE, MD_to_XL_SIZE, SM_SIZE } from '../../../constant/breakpoint';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  width: auto;

  @media ${MD_SIZE} {
    flex-direction: column;
    align-items: baseline;
    margin-top: 30px;
    border-top: 1px solid #0000001b;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;

  @media ${MD_SIZE} {
    flex-direction: column;
    align-items: baseline;
    height: auto;
    margin-top: 10px;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  @media ${MD_SIZE} {
    margin-top: 10px;
  }
  @media ${MD_to_XL_SIZE} {
    height: 100%;
  }
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
  font-weight: 500;
  font-size: 18px;
  color: ${selected ? '#ff6f0f' : '#4d5159'};
  transition: all 0.3s;

  &:hover {
    color: #ff6f0f;
  }

  @media ${MD_SIZE} {
    margin-top: 6px;
    padding: 10px 18px;
    &:hover {
      border-radius: 10px;
      background-color: rgba(0, 18, 68, 0.05);
      color: ${selected ? '#ff6f0f' : '#4d5159'};
    }
  }
  @media ${SM_SIZE} {
    font-size: 16px;
    &:hover {
      border-radius: 10px;
      background-color: rgba(0, 18, 68, 0.05);
      color: ${selected ? '#ff6f0f' : '#4d5159'};
    }
  }
`,
);

export const RouteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: #fff;
  border: 1px solid #d1d3d8;
  border-radius: 5px;
  color: #000;
  font-weight: 500;
  transition: all 0.5s;

  &:hover {
    background-color: rgba(0, 18, 68, 0.05);
    color: #555;
  }

  // DESC: Only mobile view
  @media ${MD_SIZE} {
    padding: 10px 18px;
    border: none;
    border-radius: 10px;
    color: #4d5159;
    font-size: 18px;

    &:hover {
      background-color: rgba(0, 18, 68, 0.05);
    }
  }

  @media ${SM_SIZE} {
    font-size: 16px;
  }
`;
