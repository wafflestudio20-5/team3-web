import styled from 'styled-components';
import { MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 74px);
  background: transparent;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

export const WindowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 700px;
  height: 405px;

  @media ${MD_SIZE} {
    width: 360px;
    height: 300px;
  }
`;

export const Window = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 380px;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.025),
    0 2px 2px hsl(0deg 0% 0% / 0.025), 0 4px 4px hsl(0deg 0% 0% / 0.025),
    0 8px 8px hsl(0deg 0% 0% / 0.025), 0 16px 16px hsl(0deg 0% 0% / 0.025);

  @media ${MD_SIZE} {
    width: 340px;
    height: 270px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 44px;
  background: #ffffff;
  padding: 0 25px 0 10px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid #eeeeee;

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
  display: flex;
  align-items: center;
  height: 25px;
  flex-grow: 1;
  padding: 0 15px;
  margin-left: 150px;
  margin-top: 3px;
  font-size: 11px;
  color: #aaaaaa;
  background: #f0f0f0;
  border-radius: 30px;

  @media ${MD_SIZE} {
    margin-left: 60px;
    height: 22px;
    font-size: 9px;
  }
`;

export const Typing = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
  margin-left: 40%;
  margin-bottom: 20px;
  padding-right: 20px;
  padding-top: 5px;
  width: 240px;
  height: 50px;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  font-family: 'Cafe24Ssurround';
  background: #ff7e36;
  border-radius: 25px 25px 5px 25px;

  &::after {
    display: flex;
    height: 50px;
    font-family: 'Pretendard-Regular';
    content: '|';
    animation: blink 1s step-end infinite;
    color: #fff;
    font-weight: 300;
    font-size: 30px;
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
  /* @media ${MD_SIZE} {
    font-size: 25px;
    margin-right: 0px;
  } */
`;

export const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  margin-top: 6vh;
  cursor: pointer;
`;

export const ScrollDown = styled.div`
  font-family: 'LINESeedKR-Bd';
  color: #a9a9a9;
  font-weight: 500;
  font-size: 18px;
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
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 336px;
  padding: 10px;
  background: #fff;

  @media ${MD_SIZE} {
    height: 230px;
  }
`;

export const MockUpImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;

  @media ${MD_SIZE} {
    height: 100%;
  }
`;

export const MockupImg2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 30px;
  bottom: 50px;
  width: 180px;
  height: 122px;
  z-index: 9;
  background-color: #fff;
  border: 8px solid #ffffff66;
  border-radius: 5px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  object-fit: cover;

  @media ${MD_SIZE} {
    display: none;
  }

  animation: enlarge 3s infinite alternate;
  @keyframes enlarge {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.08);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const MockupImg3 = styled.div`
  display: block;
  position: absolute;
  right: 10px;
  bottom: 160px;
  width: 140px;
  height: 100px;
  animation: none;
  border: 8px solid #ffffff66;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);

  z-index: 9;
  object-fit: cover;

  @media ${MD_SIZE} {
    display: none;
  }
`;

export const Cursor = styled.img`
  display: block;
  position: absolute;
  left: 50px;
  bottom: 40px;
  width: 34px;
  height: 38px;
  border: none;
  z-index: 10;
  @media ${MD_SIZE} {
    left: 20px;
    bottom: 20px;
    width: 25px;
    height: 30px;
  }

  animation: click 3s infinite alternate;
  @keyframes click {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
