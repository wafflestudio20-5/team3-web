import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 32px;
  width: 100%;
  height: 110px;
  gap: 8px;
  border-bottom: 0.5px solid #a9a9a9;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background: #fff;
  border: 1px solid #a1a1a1;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background: #e8e8e850;
  }
`;

export const ImageInput = styled.input`
  display: none;
`;

export const Camera = styled.img`
  width: 22px;
  height: 22px;
`;

export const ImgCount = styled.div`
  margin-top: 2px;
  font-weight: 600;
  font-size: 11px;
  color: #a2a2a2;
`;

export const Spinner = styled.img`
  width: 40px;
  height: 40px;
`

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-bottom: 20px;
`
