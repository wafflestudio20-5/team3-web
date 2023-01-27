import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  width: 100%;
  padding: 36px 20px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const More = styled.span`
  font-family: 'LINESeedKR-Bd';
  width: auto;
  height: 20px;
  font-size: 14px;
  color: #ff6f0f;
  transition: 0.5s all;

  &:hover {
    transform: translateY(-2px);
    color: #f06102;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-family: 'LINESeedKR-Bd';
  font-size: 20px;
  margin-bottom: 24px;

  @media ${MD_SIZE} {
    margin-bottom: 20px;
  }
`;

export const TradesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media ${MD_SIZE} {
    display: flex;
    flex-direction: column;
    align-content: center;
    height: auto;
    gap: 4px;
  }
`;
