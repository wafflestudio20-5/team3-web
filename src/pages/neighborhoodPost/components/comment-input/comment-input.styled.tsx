import styled from 'styled-components';
import { COLOR_CARROT } from '../../../../constant';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  // position: absolute;
  // bottom: 10px;
  display: flex;
  justify-content: center;

  margin: 20px 0px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Label = styled.label`
  font-size: 15px;
  //   margin-right: 20px;
`;

export const Input = styled.input`
  width: 500px;
  height: 30px;
  padding: 0px 15px;
  border: none;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);

  @media ${MD_SIZE} {
    width: 350px;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 30px;

  border-radius: 10px;
  color: white;
  font-size: 15px;
  background-color: ${COLOR_CARROT};
`;
