import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Button = styled.img`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 88px;
  height: 88px;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    transform: translateY(-2px);
  }

  @media ${MD_SIZE} {
    width: 60px;
    height: 60px;
    right: 20px;
    bottom: 20px;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;
