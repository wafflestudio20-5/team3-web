import styled from 'styled-components';
import { MD_SIZE, Market_MD, Market_XL } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  transition: 0.3s all;

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
  height: 47px;
  align-items: center;
  padding-right: 8px;
  border-radius: 12px;
  background: #f5f5f5;

  @media ${Market_MD} {
    width: 360px;
  }

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
  margin-left: 18px;
  margin-right: 12px;

  @media ${MD_SIZE} {
    margin-left: 12px;
  }
`;

export const Bar = styled.input`
  width: 346px;
  height: 36px;
  border: 0px solid transparent;
  margin-bottom: 1px;
  outline: none;
  background: #f5f5f5;
  border-radius: 12px;
  font-size: 15px;

  -webkit-box-shadow: 0 0 0 1000px #f5f5f5 inset;
  box-shadow: 0 0 0 1000px #f5f5f5 inset;

  @media ${Market_MD} {
    width: 300px;
  }

  @media ${MD_SIZE} {
    width: 80%;
  }
`;

export const Clear = styled.img`
  width: 20px;
  height: 20px;
  margin: auto;
  cursor: pointer;

  @media ${MD_SIZE} {
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
