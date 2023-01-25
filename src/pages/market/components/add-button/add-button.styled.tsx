import styled from 'styled-components';
import { MD_SIZE, MD_to_XL_SIZE, SM_SIZE } from '../../../../constant/breakpoint';

export const Button = styled.img`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 90px;
  height: 90px;

  @media ${MD_SIZE} {
    right: 30px;
    bottom: 30px;
  }
`;
