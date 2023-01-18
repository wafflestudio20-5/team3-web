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
  margin-top: 30px;
`;

export const ImagePositionWrapper = styled.div`
  position: relative;
  width: 155px;
  height: 155px;
`;

export const Label = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
`;

export const IconInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #e5e5e5;
  border-radius: 50%;
  transition: all 0.3s;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ImageInput = styled.input`
  display: none;
  position: absolute;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #f2f2f2;
`;
