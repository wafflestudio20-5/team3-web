import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { MD_SIZE } from '../../constant/breakpoint';

interface WrapperProps extends HTMLAttributes<HTMLElement> {
  isColored?: boolean;
}

export const Wrapper = styled.div<WrapperProps>(
  ({ isColored }) => `
  background: ${isColored ? '#f5f5f5' : '#fff'};
  display: flex;
  justify-content: center;
  align-items: center;
  // position: fixed;
  // top: 0;
  width: 100%;
  min-width: 360px;
  height: 74px;
  box-shadow: 0 4px 12px 0 rgba(199, 199, 199, 0.029);
  border-bottom: 1px solid #f4f4f4;
`,
);

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 360px;
  height: 100%;
  padding: 0 40px;

  @media ${MD_SIZE} {
    padding: 0 20px;
  }
`;

export const LogoImg = styled.img`
  cursor: pointer;
  margin-right: 30px;
`;

export const MenuIconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const DrawerWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 218px);
  padding: 0 25px;
`;

export const Auth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 84px;
  width: 100%;
  color: #909092;
  border-top: 1px solid #eff0f2;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background: #f7f7f7;
  }
`;

export const LockIcon = styled.img`
  margin-right: 3px;
  width: 18px;
`;

export const DesktopWrapper = styled.div`
  display: block;
  flex-grow: 1;
  @media ${MD_SIZE} {
    display: none;
  }
`;
