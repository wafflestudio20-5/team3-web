import styled from 'styled-components';
import { COLOR_CARROT } from '../../constant';
import { MD_SIZE } from '../../constant/breakpoint';

export const Button = styled.img`
  position: fixed;
  right: 60px;
  bottom: 60px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: 0.3s all;

  @media ${MD_SIZE} {
    right: 40px;
    bottom: 40px;
  }

  &:hover{
    transform: translateY(-4px);
  }
`;
