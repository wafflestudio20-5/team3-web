import styled from 'styled-components';
import { SM_to_MD_SIZE } from '../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  min-width: 360px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 711px;
  min-width: 360px;
  height: auto;
  padding: 50px 0 0 0;

  @media ${SM_to_MD_SIZE} {
    padding: 40px 0;
  }
`;
