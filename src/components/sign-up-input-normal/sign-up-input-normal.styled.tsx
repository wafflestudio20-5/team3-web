import styled from 'styled-components';
import { Button } from '../button-normal/button-normal.styled';

export const SignUpInputWrapper = styled.div`
  display: block;
  width: 80%;
  margin: 10px;
`;

export const SignUpInput = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0px;
`;

export const SignUpInputLeft = styled.div`
  flex: 9;
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0px;
  }
`;

export const SignUpInputRight = styled.div`
  flex: 1;
`;

export const SignUpButton = styled(Button)`
  height: 50px;
  color: white;
  width: 100%;
`;
