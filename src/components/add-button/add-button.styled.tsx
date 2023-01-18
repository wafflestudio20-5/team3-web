import styled from 'styled-components';
import { COLOR_CARROT } from '../../constant';
import { MD_SIZE } from '../../constant/breakpoint';

export const Button = styled.img`
  position: fixed;
  right: 60px;
  bottom: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 10px;
  background-color: ${COLOR_CARROT};
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.3);

  @media ${MD_SIZE} {
    right: 40px;
    bottom: 40px;
  }
`;
