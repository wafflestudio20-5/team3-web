import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  margin-bottom: 36px;

  @media ${MD_SIZE} {
    flex-direction: column;
    width: auto;
    height: 94px;
    align-items: flex-end;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 44px;
  padding: 0 28px;
  border-radius: 10px;
  background: rgba(255, 111, 15, 0.2);
`;

export const Title = styled.span`
  margin-left: 6px;
  color: #ff6f0f;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
`;

export const ChatBtn = styled.button`
  display: flex;
  align-items: center;
  width: 120px;
  height: 44px;
  padding: 0 14px;
  border-radius: 10px;
  background: #ff6f0f;
  transition: all 0.3s;

  &:hover {
    background-color: rgb(255, 92, 38);
    box-shadow: 0 5px 10px #e9e9e9;
    transform: translateY(-2px);
  }
`;

export const Chat = styled.span`
  margin-left: 6px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
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
