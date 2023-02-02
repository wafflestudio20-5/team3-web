import styled from 'styled-components';

import { MD_SIZE } from '../../../../constant/breakpoint';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 1;

  width: 711px;
  height: auto;
  margin-bottom: 80px;
  padding: 20px 46px;
  border-radius: 10px;

  background-color: white;
  // overflow: auto;

  @media ${MD_SIZE} {
    padding: 0px 20px;
    width: 100%;
  }
`;

export const TopTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 40px 0px;
`;

export const TopText = styled.span`
  font-size: 25px;

  @media ${MD_SIZE} {
    font-size: 20px;
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

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const NotFoundImg = styled.img`
  width: 270px;
  height: auto;
`;
