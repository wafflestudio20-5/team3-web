import styled from 'styled-components';
import { LG_SIZE, MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 74px);
  background-color: #fbf7f2;
  display: flex;
  justify-content: center;

  @media ${LG_SIZE} {
    width: 100vw;
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding-left: 40px;
  position: relative;
  max-width: 1200px;
  min-width: 1056px;

  @media ${LG_SIZE} {
    flex-direction: column;
    min-width: 360px;
    padding-left: 0px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 92%;
  margin-left: 50px;

  @media ${LG_SIZE} {
    height: 300px;
    margin-left: 0;
    align-items: center;
    width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  margin-top: 111px;

  @media ${LG_SIZE} {
    position: relative;
    justify-content: center;
  }
`;

export const DesktopImg = styled.img`
  width: 755px;
  height: 635px;

  @media ${LG_SIZE} {
    width: 500px;
    height: 420px;
  }

  @media ${MD_SIZE} {
    width: 360px;
    height: 310px;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-size: 45px;
  color: #000;
  font-weight: 600;
  line-height: 1.3;

  @media ${LG_SIZE} {
  }
`;

export const SubTitle = styled.h3`
  display: flex;
  font-size: 15px;
  color: #5a5a5a;
  font-weight: 300;
  line-height: 1.2;
  margin-top: 2px;

  &:first-of-type {
    margin-top: 30px;
  }

  @media ${LG_SIZE} {
  }
`;
