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
  align-items: center;
  width: 100%;
  margin: 10px 0 75px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Input = styled.input`
  flex-grow: 1;
  max-width: 250px;
  height: 40px;
  padding: 0 12px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  font-weight: 400;
  font-size: 14px;
  color: #212124;

  &:focus {
    outline: 1px solid #ff8e43;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  max-width: 76px;
  height: 40px;
  margin-left: 8px;
  padding: 0 12px;
  border-radius: 6px;
  font-size: 13px;
  color: #fff;
  background: #ff6f0f;
  transition: all 0.3s;

  &:hover {
    background-color: rgb(255, 92, 38);
    box-shadow: 0 5px 10px #e9e9e9;
    transform: translateY(2px);
  }
`;
