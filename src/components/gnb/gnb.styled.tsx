import styled from 'styled-components';
import { MD_SIZE, MD_to_XL_SIZE } from '../../constant/breakpoint';

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 74px;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.029);
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  padding: 0 30px;
`;

export const MobileWrapper = styled.div`
  @media ${MD_to_XL_SIZE} {
    display: none;
  }
`;

export const DesktopWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  @media ${MD_SIZE} {
    display: none;
  }
`;

export const LogoImg = styled.img`
  margin-right: 30px;
`;

export const MenuIconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
