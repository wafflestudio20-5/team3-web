import styled from 'styled-components';
import { MD_SIZE, Market_MD, Market_XL } from '../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  margin: 30px auto 20px auto;
  text-align: center;
  font-size: 24px;
  font-weight: 600;

  @media ${MD_SIZE} {
    width: 100vw;
    margin-top: 20px;
  }
`;

export const StatusBox = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  width: 80%;
  max-width: 860px;
  border: 1px solid gray;
`;

export const FilterBox = styled.div`
  display: flex;
  width: 880px;
  position: relative;
  margin-bottom: 20px;

  @media ${MD_SIZE} {
    width: 100%;
    margin-right: 16px;
  }

  @media ${Market_MD} {
    width: 650px;
  }

  @media ${Market_XL} {
    width: 1100px;
  }
`;

export const Filter = styled.select`
  width: 160px;
  height: 30px;
  margin-left: auto;
`;

export const Option = styled.option``;
export const Intro = styled.h2``;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  column-gap: 30px;
  row-gap: 100px;

  @media ${MD_SIZE} {
    display: flex;
    flex-direction: column;
    row-gap: 0;
    column-gap: 0;
    width: 100vw;
    padding: 0;
    border-bottom: 0.5px solid #8a8a8a;
  }

  @media ${Market_MD} {
    grid-template-columns: repeat(3, 200px);
  }

  @media ${Market_XL} {
    grid-template-columns: repeat(5, 200px);
  }
`;

export const Message = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
