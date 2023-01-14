import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  margin-top: 20px;
  padding: 0px 20vw;

  overflow: auto;

  @media ${MD_SIZE} {
    width: 100vw;
  }
`;

export const TopTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;
`;

export const TopText = styled.span`
  font-size: 24px;

  @media ${MD_SIZE} {
    font-size: 30px;
  }
`;

export const MoreTextWrapper = styled.div`
  display: flex;
  justify-content: center;

  bottom: 0px;
  width: 100%;
  padding: 10px 0px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.2);
`;

export const MoreText = styled.span`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
`;
