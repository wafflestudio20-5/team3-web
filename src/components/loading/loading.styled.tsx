import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 360px;
  min-height: 100%;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoadingGif = styled.img`
  width: 100px;
  height: 100px;
`;

export const LoadingAnnounce = styled.h3`
  font-family: 'KyoboHand';
  font-size: 16px;
  color: #FF6F0F;
  margin-left: 10px;
`;