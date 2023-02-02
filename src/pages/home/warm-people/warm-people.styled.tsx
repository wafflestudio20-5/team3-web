import styled from 'styled-components';
import { MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  margin-top: -35px;
  width: 100%;
  height: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media ${MD_SIZE} {
    height: 1900px;
    margin-top: -65px;
  }
`;

export const BgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 150px 0 300px 0;
  background-color: #fff8e7;

  @media (max-width: 900px) {
    padding: 100px 0 200px 0;
  }
`;

export const H1 = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  color: #414141;
  font-family: 'LINESeedKR-Bd';
  margin-bottom: 44px;

  @media ${MD_SIZE} {
    font-size: 30px;
  }
`;

export const PositionWrapper = styled.div`
  width: 567px;
  height: 130px;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 130px;

  @media ${MD_SIZE} {
    width: 300px;
    height: 80px;
    margin-bottom: 70px;
  }
`;

export const BgTemp = styled.div`
  width: 567px;
  height: 42px;
  background: #d9d9d9;
  box-shadow: inset 0px 6px 24px rgba(0, 0, 0, 0.19);
  border-radius: 60px;

  @media ${MD_SIZE} {
    width: 300px;
    height: 24px;
  }
`;

export const CurrTemp = styled.div`
  position: absolute;
  height: 42px;
  background: #ff7e36;
  box-shadow: inset 0px 6px 24px rgba(255, 250, 250, 0.4);
  border-radius: 60px;

  @keyframes run {
    0% {
      width: 200px;
    }
    50% {
      width: 378px;
    }
    100% {
      width: 200px;
    }
  }
  animation-delay: 0.5s;
  animation: run 8s infinite;

  @media ${MD_SIZE} {
    height: 24px;
    background: #ff7e36;
    box-shadow: inset 0px 6px 24px rgba(255, 250, 250, 0.4);
    border-radius: 60px;

    @keyframes run {
      0% {
        width: 100px;
      }
      50% {
        width: 220px;
      }
      100% {
        width: 100px;
      }
    }
    animation-delay: 0.5s;
    animation: run 8s infinite;
  }
`;

export const Bubble1 = styled.img`
  width: 140px;
  height: auto;
  position: absolute;
  top: 6px;
  left: 22px;

  @media ${MD_SIZE} {
    width: 90px;
    height: auto;
  }
`;

export const Bubble2 = styled.img`
  width: 170px;
  height: auto;
  position: absolute;
  top: -20px;
  left: 204px;
  @keyframes updown {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  animation: updown 1.5s infinite;

  @media ${MD_SIZE} {
    width: 120px;
    height: auto;
    top: -30px;
    left: 110px;
  }
`;

export const Bubble3 = styled.img`
  width: 115px;
  height: auto;
  position: absolute;
  top: 16px;
  left: 330px;

  @media ${MD_SIZE} {
    width: 80px;
    height: auto;
    top: -10px;
    left: 200px;
  }
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  white-space: pre-wrap;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #414141;
  font-family: 'Noto Sans';
  margin-bottom: 126px;

  @media ${MD_SIZE} {
    font-size: 18px;
    margin-bottom: 100px;
  }
`;

export const AwardBgWrapper = styled.div`
  width: 3178px;
  height: 1651px;
  background: rgba(255, 255, 255, 0.56);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AwardTitle = styled.img`
  width: 445px;
  height: auto;
  margin-top: 74px;

  @media ${MD_SIZE} {
    width: 300px;
  }
`;

export const AwardPeopleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 4%;

  @media ${MD_SIZE} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const AwardInnerWrapper = styled.div`
  display: flex;
  margin-top: 75px;
`;
