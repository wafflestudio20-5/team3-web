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
  width: 400px;
  margin: 30px auto 20px auto;
  text-align: center;
  font-size: 20px;
  font-weight: 600;

  @media ${MD_SIZE} {
    width: 100vw;
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
  position: relative;
  width: 90%;
  max-width: 900px;

  @media ${MD_SIZE} {
    width: 100%;
  }
`;

export const Filter = styled.select`
  width: 160px;
  height: 30px;
  margin-left: auto;
  margin-right: 10px;
`;

export const Option = styled.option``;
export const Intro = styled.h2``;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 200px));
  column-gap: 30px;
  row-gap: 100px;
  max-width: 1080px;
  align-content: center;
  margin-top: 20px;

  @media ${MD_SIZE} {
    display: flex;
    flex-direction: column;
    row-gap: 0;
    column-gap: 0;
    width: 100vw;
    padding: 0;
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
