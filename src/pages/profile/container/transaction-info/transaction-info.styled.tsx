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
