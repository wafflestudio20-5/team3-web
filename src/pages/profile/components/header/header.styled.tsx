import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 54px;
  margin-bottom: 36px;

  @media ${MD_SIZE} {
    padding: 0 16px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
  height: auto;
`;

export const Unread = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  min-width: 23px;
  padding: 0 4px;
  width: auto;
  height: 23px;
  background: rgb(255, 92, 38);
  border: 3px solid #fcfcfc;
  color: #fff;
  border-radius: 100px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.19);
  top: 0;
  right: 0;
  font-weight: 400;
  font-size: 12px;

  @media ${MD_SIZE} {
    top: 4px;
    right: 10px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 44px;
  padding: 0 24px;
  border-radius: 10px;
  background: rgba(255, 111, 15, 0.2);

  @media ${MD_SIZE} {
    height: 40px;
    padding: 0 20px;
  }
`;

export const Title = styled.span`
  margin-left: 6px;
  color: #ff6f0f;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;

  @media ${MD_SIZE} {
    font-size: 13px;
  }
`;

export const ChatBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 44px;
  padding: 0 12px;
  border-radius: 10px;
  background: #ff6f0f;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 5px 10px #e9e9e9;
    transform: translateY(-2px);
  }

  @media ${MD_SIZE} {
    width: 48px;
    height: 40px;
  }
`;

export const Chat = styled.span`
  margin-left: 6px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;

  @media ${MD_SIZE} {
    font-size: 0;
    margin-left: 0;
  }
`;

export const SkeletonTitleBox = styled.div`
  @keyframes wave {
    100% {
      background: rgba(240, 240, 240, 0.519);
    }
    50% {
      background: rgba(183, 183, 183, 0.3);
    }
    0% {
      background: rgba(240, 240, 240, 0.519);
    }
  }
  animation: wave 2s ease-in-out infinite;

  width: 210px;
  height: 44px;
  border-radius: 10px;
`;

export const SkeletonChatBox = styled.div`
  @keyframes wave {
    100% {
      background: rgba(240, 240, 240, 0.519);
    }
    50% {
      background: rgba(183, 183, 183, 0.3);
    }
    0% {
      background: rgba(240, 240, 240, 0.519);
    }
  }
  animation: wave 2s ease-in-out infinite;

  width: 120px;
  height: 44px;
  border-radius: 10px;
`;
