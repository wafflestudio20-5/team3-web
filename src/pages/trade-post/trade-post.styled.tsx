import styled from 'styled-components';
import { MD_SIZE } from '../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  min-width: 360px;
  background-color: #f5f5f5;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 711px;
  min-width: 360px;
  height: auto;
  padding: 44px 10px 30px 10px;
  margin: 20px 0 50px 0;
  background: #fff;
  border-radius: 16px;

  @media ${MD_SIZE} {
    padding: 30px 0;
  }
`;
