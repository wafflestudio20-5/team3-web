import styled from 'styled-components';
import { MD_SIZE, SM_to_MD_SIZE } from '../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 712px;
  min-width: 360px;
  height: auto;
  padding: 30px 16px 0 16px;

  @media ${SM_to_MD_SIZE} {
    padding: 35px 20px;
  }
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
  border-top: 2px solid #f5f5f5;

  @media ${MD_SIZE} {
    width: 336px;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
    column-gap: 2px;
  }
`;
