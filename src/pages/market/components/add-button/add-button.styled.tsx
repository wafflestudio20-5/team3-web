import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Button = styled.img`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 90px;
  height: 90px;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }

  @media ${MD_SIZE} {
    right: 30px;
    bottom: 30px;
  }
`;
