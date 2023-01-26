import styled from 'styled-components';
import { COLOR_CARROT } from '../../../../constant';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Label = styled.label`
  font-size: 20px;
  //   margin-right: 20px;
`;

export const Input = styled.input`
  width: 500px;
  height: 40px;
  padding: 0px 15px;
  border: none;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);

  @media ${MD_SIZE} {
    width: 350px;
  }
`;

export const Button = styled.button`
  width: 60px;
  height: 40px;

  border-radius: 10px;
  color: white;
  background-color: ${COLOR_CARROT};
`;
