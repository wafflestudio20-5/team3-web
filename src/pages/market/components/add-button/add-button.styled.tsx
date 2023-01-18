import styled from 'styled-components';
import { MD_SIZE, MD_to_XL_SIZE, SM_SIZE } from '../../../../constant/breakpoint';

export const Button = styled.img`
  position: fixed;
  right: 60px;
  bottom: 60px;
  width: 60px;
  height: 60px;

  @media ${MD_SIZE} {
    right: 40px;
    bottom: 40px;
  }
`;
