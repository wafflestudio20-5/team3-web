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
  margin-top: 20px;
`;

export const Label = styled.label`
  width: 90%;
  padding: 5px;
  font-weight: 400;
  font-size: 12px;
  color: #acacac;
`;

export const InputWrapper = styled.div`
  width: 90%;
  height: 56px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 14px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-weight: 400;
  font-size: 14px;
  color: #3d3d3d;
  -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
  box-shadow: 0 0 0 1000px #ffffff inset;

  &:focus {
    outline: 1px solid #ff8e43;
  }
`;

export const Announce = styled.span`
  font-weight: 500;
  font-size: 7px;
  line-height: 20px;
  color: ${props => props.color || '#000'};
  height: 16px;
  padding-left: 4px;
`;
