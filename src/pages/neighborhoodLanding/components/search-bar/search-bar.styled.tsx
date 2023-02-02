import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 15px;
  gap: 8px;

  @media ${MD_SIZE} {
    width: 100vw;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 0px;
    gap: 0;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 430px;
  height: 45px;
  align-items: center;
  padding-right: 8px;
  border: 0.5px solid #ececec;
  border-radius: 12px;
  background-color: #fff;

  @media ${MD_SIZE} {
    width: 100vw;
    border-left: 0px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    border-radius: 0;
    margin-top: 0;
  }
`;

export const Img = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 16px;
  margin-right: 12px;
`;

export const Bar = styled.input`
  width: 346px;
  height: 36px;
  border: 0px solid transparent;
  margin-bottom: 1px;
  outline: none;
  font-size: 15px;
  -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
  box-shadow: 0 0 0 1000px #ffffff inset;
  
  @media ${MD_SIZE} {
    width: 80%;
  }
`;

export const Clear = styled.img`
  width: 20px;
  height: 20px;
  margin: auto;
  cursor: pointer;
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
