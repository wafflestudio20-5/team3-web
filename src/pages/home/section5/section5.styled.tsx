import styled from 'styled-components';
import { MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${MD_SIZE} {
  }
`;

export const BgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 200px 0 300px 0;
  background-color: #fff8f0;

  @media (max-width: 900px) {
    padding: 100px 0 200px 0;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 230px;
  background: #fff;
  border-radius: 50%;

  @media ${MD_SIZE} {
    width: 190px;
    height: 190px;
  }
`;
export const Img = styled.img`
  width: 160px;
  height: 150px;

  @media ${MD_SIZE} {
    width: 120px;
    height: 110px;
  }
`;

export const Title = styled.h1`
  margin: 28px 0 36px 0;
  font-family: 'LINESeedKR-Bd';
  font-size: 40px;
  color: #404040;

  @media ${MD_SIZE} {
    font-size: 30px;
  }
`;

export const Subtitle = styled.h4`
  margin: 16px 0 0 0;
  font-size: 14px;
  color: #9f9f9f;
`;

export const ArrowWrapper = styled.div`
  @keyframes updown {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  animation: updown 1.5s infinite;
`;

export const Button = styled.button`
  width: auto;
  height: auto;
  padding: 18px 34px;
  margin-top: 10px;
  color: #fff;
  background: #ff6f06;
  font-size: 18px;
  font-weight: 700;
  border-radius: 60px;
  transition: 0.3s all;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    background: #ff5906;
  }
`;
