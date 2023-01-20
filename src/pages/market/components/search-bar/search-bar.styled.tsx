import styled from 'styled-components';
import { MD_SIZE, MD_to_XL_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 10px;
  gap: 8px;

  @media ${MD_SIZE} {
    width: 100vw;
    align-items: center;
    margin-top: 0px;
    gap: 0;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 40px;
  align-items: center;
  border: 1px solid gray;
  border-radius: 12px;

  @media ${MD_SIZE} {
    width: 98vw;
    border-left: 0px solid transparent;
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

export const Button = styled.button`
  width: 54px;
  height: 40px;
  text-align: center;
  line-height: 20px;
  background-color: #ff6f0f;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border: 0px solid transparent;
  border-radius: 12px;

  @media ${MD_SIZE} {
    position: absolute;
    right: 1px;
    height: 40px;
    border-radius: 6px;
  }
`;
