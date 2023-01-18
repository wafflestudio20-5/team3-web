import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 36px;
  padding: 0 16px;
  margin-right: 8px;
  background: rgb(241, 241, 242);
  border: 1px solid rgb(241, 241, 242);
  border-radius: 6px;
  transition: all 0.3s;

  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    background-color: #f6f6f6;
    transform: translateY(-2px);
  }
`;

export const Img = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 3px;
`;

export const Text = styled.span`
  font-size: 12px;
  text-align: center;
  color: #212124;
`;
