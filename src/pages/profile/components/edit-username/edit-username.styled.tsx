import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Input = styled.input`
  width: 90%;
  height: 46px;
  padding: 0 16px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  margin: 20px 0 50px 0;
  font-weight: 400;
  font-size: 16px;
  color: #212124;

  &:focus {
    outline: 1px solid #ff8e43;
  }
`;

export const Image = styled.img`
  width: 155px;
  height: 155px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #f2f2f2;
`;
