import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  height: 66px;
  padding: 0 20px 0 26px;
  background: #fdfdfd;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  transition: all 0.3s;

  &:hover {
    background-color: #f5f5f5;
    box-shadow: 0 5px 10px #f1f1f1;
    transform: translateY(-2px);
  }

  @media ${MD_SIZE} {
    width: 162px;
    height: 50px;
    padding: 0 16px 0 18px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: #212124;
`;

export const SignatureIcon = styled.img`
  margin-right: 8px;
  margin-top: 1px;

  @media ${MD_SIZE} {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
`;

export const ArrowIcon = styled.img`
  @media ${MD_SIZE} {
    width: 16px;
    height: 16px;
  }
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

  width: 220px;
  height: 66px;
  border-radius: 6px;

  @media ${MD_SIZE} {
    width: 162px;
    height: 50px;
  }
`;
