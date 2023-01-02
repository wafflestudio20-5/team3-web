import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  height: auto;
  border-left: 2px solid #eaebee;
  padding-left: 15px;

  @media ${MD_SIZE} {
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

export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 34px;
`;

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const LocationInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  margin-bottom: 6px;
`;

export const LocationText = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  color: #5d5d71;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 132px;
  border-radius: 10px;
`;
