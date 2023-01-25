import styled from 'styled-components';
import { MD_SIZE } from '../../constant/breakpoint';

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 712px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 360px;
  height: auto;
  padding: 30px 16px 0 16px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;

  @media ${MD_SIZE} {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 10px;
  column-gap: 10px;
  width: 100%;
  margin-top: 48px;
  padding-top: 36px;
  padding-bottom: 100px;
  border-top: 2px solid #f5f5f5;

  @media ${MD_SIZE} {
    width: 336px;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
    column-gap: 2px;
  }
`;

export const Header = styled.h1`
  margin: 5px 10px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 15px;
`;

export const DefaultAnnounce = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 14px;
  color: #757575;
`;

