import styled from 'styled-components';
import { LG_SIZE, MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
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
  justify-content: center;
  align-items: center;
  padding-right: 40px;
  position: relative;
  max-width: 1100px;

  @media ${LG_SIZE} {
    flex-direction: column;
    min-width: 360px;
    padding-right: 0px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 92%;
  margin-left: 100px;

  @media ${LG_SIZE} {
    height: 300px;
    align-items: center;
    width: 100%;
    margin-left: 0;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;

  @media ${LG_SIZE} {
    position: relative;
    justify-content: center;
    margin-top: 100px;
  }
`;

export const DesktopImg = styled.img`
  width: 490px;
  height: 635px;

  @media ${LG_SIZE} {
    width: 325px;
    height: 420px;
  }

  @media ${MD_SIZE} {
    width: 360px;
    height: 310px;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-size: 40px;
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

export const ButtonWrapper = styled.div`
  display: flex;
  width: 300px;
  height: auto;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 50px;
  padding: 20px;

  background: #f1f3f5;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #212529;
  transition: 0.2s all;

  &:hover {
    background: #e2e3e3;
  }
`;
