import styled from 'styled-components';
import { MD_SIZE, MD_to_XL_SIZE, SM_SIZE } from '../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 95%;
  max-width: 1200px;
  align-content: center;
  justify-content: center;

  @media ${MD_SIZE} {
    width: 100vw;
  }
`;

export const Intro = styled.h2``;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 200px));
  column-gap: 30px;
  row-gap: 100px;
  width: 95%;
  max-width: 1200px;
  align-content: center;
  justify-content: center;
  padding: 30px 60px;

  @media ${MD_SIZE} {
    display: flex;
    flex-direction: column;
    row-gap: 0;
    column-gap: 0;
    width: 100vw;
    padding: 0;
  }
`;
