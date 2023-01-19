import styled from 'styled-components';
import { MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 74px);
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WindowWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 405px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${MD_SIZE} {
    width: 360px;
    height: 300px;
  }
`;

export const Window = styled.div`
  width: 500px;
  height: 380px;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.025),
    0 2px 2px hsl(0deg 0% 0% / 0.025), 0 4px 4px hsl(0deg 0% 0% / 0.025),
    0 8px 8px hsl(0deg 0% 0% / 0.025), 0 16px 16px hsl(0deg 0% 0% / 0.025);
  display: flex;
  flex-direction: column;

  @media ${MD_SIZE} {
    width: 340px;
    height: 270px;
  }
`;

export const Nav = styled.nav`
  background: #ffffff;
  padding: 0 25px 0 10px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid #eeeeee;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media ${MD_SIZE} {
    height: 40px;
  }
`;

export const Close = styled.div`
  width: 13px;
  height: 13px;
  background-color: #ff3838;
  border-radius: 50%;
  margin-left: 10px;
`;

export const Hold = styled.div`
  width: 13px;
  height: 13px;
  background-color: #ffd800;
  border-radius: 50%;
  margin-left: 6px;
`;

export const Open = styled.div`
  width: 13px;
  height: 13px;
  background-color: #02c75a;
  border-radius: 50%;
  margin-left: 6px;
`;

export const Domain = styled.div`
  margin-left: 150px;
  height: 25px;
  background: #f0f0f0;
  border-radius: 30px;
  flex-grow: 1;
  padding: 0 15px;
  margin-top: 3px;
  font-size: 11px;
  color: #aaaaaa;
  display: flex;
  align-items: center;

  @media ${MD_SIZE} {
    margin-left: 60px;
    height: 22px;
    font-size: 9px;
  }
`;

export const Typing = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  color: #ff7e36;
  font-weight: 400;
  font-size: 30px;
  font-family: 'Cafe24Ssurround';

  &::after {
    display: flex;
    font-family: 'Pretendard-Regular';
    content: '|';
    animation: blink 1s step-end infinite;
    color: #ff7e36;
    font-weight: 300;
    font-size: 40px;
    height: 60px;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    49% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @media ${MD_SIZE} {
    font-size: 25px;
  }
`;

export const ScrollDown = styled.div`
  color: #a9a9a9;
  font-weight: 500;
  font-size: 18px;
  font-family: 'LINESeedKR-Bd';
  margin-top: -10px;
  animation: opacityAppear 2s;

  @keyframes opacityAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media ${MD_SIZE} {
    font-size: 16px;
  }
`;

export const Scroll = styled.img`
  margin-top: 5px;
  width: 40px;
  animation: upDown 0.5s linear 0s infinite alternate;

  @keyframes upDown {
    0% {
      transform: translateY(8px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const ScrollWrapper = styled.div`
  width: auto;
  height: auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6vh;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 336px;
  background: #fff;
  padding: 10px;
`;

export const Daangni = styled.img`
  width: 120px;
  height: auto;
  display: block;
  z-index: 9;
  right: 0;
  bottom: 0;
  position: absolute;

  animation: float 3s infinite alternate;
  @keyframes float {
    0% {
      transform: rotate(5deg);
    }
    100% {
      transform: translate(0, 5px);
    }
  }

  @media ${MD_SIZE} {
    width: 90px;
  }
`;

export const MockUpImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
