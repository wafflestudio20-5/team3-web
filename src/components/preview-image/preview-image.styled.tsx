import styled from 'styled-components';

export const PositionWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 75px;
  height: 100%;

  &:first-of-type {
    margin-left: 5px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 1px solid #a1a1a1;
  border-radius: 5px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const Delete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 16px;
  height: 16px;
  top: 15px;
  right: 0;
  border-radius: 50%;
  background: #000000d4;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background: #00000078;
  }

`;

export const Icon = styled.img`
  width: 70%;
  height: 70%;
  object-fit: cover;
`;
