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

  @media ${MD_SIZE} {
    right: 30px;
    bottom: 30px;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;
