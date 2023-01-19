import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface WrapperProps extends HTMLAttributes<HTMLElement> {
  isMain?: boolean;
}

export const Wrapper = styled.div<WrapperProps>(
  ({ isMain }) => `
  background: ${isMain ? '#F8F5F4' : '#fff'};
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  min-width: 360px;
  height: 74px;
  box-shadow: 0 4px 12px 0 rgba(199, 199, 199, 0.029);
  z-index: 999;
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
`;

export const LogoImg = styled.img`
  margin-right: 30px;
`;

export const MenuIconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const DrawerWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 217px);
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
