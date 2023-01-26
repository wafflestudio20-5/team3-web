import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  margin-bottom: 36px;

  @media ${MD_SIZE} {
    width: 342px;
    justify-content: flex-end;
    margin-right: 5px;
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

  @media ${MD_SIZE} {
    height: 40px;
    padding: 0 20px;
  }
`;

export const Title = styled.span`
  margin-left: 6px;
  color: #ff6f0f;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;

  @media ${MD_SIZE} {
    font-size: 13px;
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
