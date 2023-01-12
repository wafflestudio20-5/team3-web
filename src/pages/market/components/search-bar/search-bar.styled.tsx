import styled from 'styled-components';
import { MD_SIZE, MD_to_XL_SIZE } from '../../../../constant/breakpoint';

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 40px;
  align-items: center;
  border: 1px solid gray;
  border-radius: 12px;
  margin-top: 30px;

  @media ${MD_SIZE} {
    width: 100%;
    border-bottom: 0px solid transparent;
    border-left: 0px solid transparent;
    border-right: 0px solid transparent;
    border-radius: 0;
    margin-top: 0;
  }
`;

export const Img = styled.img`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  margin-right: 6px;

  @media ${MD_SIZE} {
    margin-left: 12px;
  }
`;

export const Bar = styled.input`
  width: 350px;
  height: 36px;
  border: 1px solid transparent;
  margin-bottom: 1px;
  outline: none;

  @media ${MD_SIZE} {
    width: 80%;
  }
`;
