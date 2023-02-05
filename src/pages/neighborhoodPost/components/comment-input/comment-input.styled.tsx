import styled from 'styled-components';
import { COLOR_CARROT } from '../../../../constant';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  // position: absolute;
  // bottom: 10px;
  display: flex;
  justify-content: center;

  margin: 20px 0px 20px 0px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 15px;
  //   margin-right: 20px;
`;

export const Input = styled.input`
  flex-grow: 1;

  height: 38px;
  padding: 0px 18px;
  border: none;
  border-radius: 30px;
  background-color: #ebebeb;
  -webkit-box-shadow: 0 0 0 1000px #ebebeb inset;
  box-shadow: 0 0 0 1000px #ebebeb inset;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 50px;
  height: 36px;

  border-radius: 4px;
  color: white;
  font-size: 15px;
  background-color: ${COLOR_CARROT};
`;
