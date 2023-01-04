import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Label = styled.label`
  width: 90%;
  padding: 5px;
  font-weight: 400;
  font-size: 12px;
  color: #acacac;
`;

export const Input = styled.input`
  width: 90%;
  height: 40px;
  padding: 0 16px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 14px;
  color: #3d3d3d;

  &:focus {
    outline: 1px solid #ff8e43;
  }
  &:last-of-type {
    margin-bottom: 40px;
  }
`;
