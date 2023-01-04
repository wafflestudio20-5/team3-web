import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  height: auto;
  margin-right: 20px;
  border-left: 2px solid #eaebee;
  padding-left: 15px;

  @media ${MD_SIZE} {
    margin-right: 0;
    margin-bottom: 60px;
    padding-left: 0;
    border-left: none;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 22px;
  margin-bottom: 34px;

  @media ${MD_SIZE} {
    margin-bottom: 24px;
    padding-bottom: 22px;
    border-bottom: 2px solid #eaebee;
    box-sizing: border-box;
  }
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #acacac;
  margin-left: 8px;
`;

export const NameInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Username = styled.h1`
  line-height: 21px;
  font-weight: 400;
  font-size: 24px;
  color: #212124;
  margin-bottom: 8px;
`;

export const Email = styled.h3`
  line-height: 21px;
  font-weight: 400;
  font-size: 14px;
  color: #737373;
  margin-bottom: 44px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

export const SkeletonImg = styled.div`
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
  width: 155px;
  height: 155px;
  margin-bottom: 24px;
  border-radius: 50%;
`;

export const SkeletonUsername = styled.div`
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

  width: 80px;
  height: 21px;
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const SkeletonEmail = styled.div`
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

  width: 128px;
  height: 21px;
  border-radius: 10px;
  margin-bottom: 44px;
`;

export const SkeletonButton = styled.div`
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

  width: 300px;
  height: 44px;
  border-radius: 10px;
`;
