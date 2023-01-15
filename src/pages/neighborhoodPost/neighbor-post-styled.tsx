import styled from 'styled-components';
import { MD_SIZE } from '../../constant/breakpoint';

export const Container = styled.div`
  margin-top: 15px;
  padding: 0 20vw;

  @media ${MD_SIZE} {
    padding: 0 20px;
  }
`;
