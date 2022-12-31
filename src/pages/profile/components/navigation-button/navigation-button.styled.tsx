import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  height: 66px;
  padding: 0 20px 0 26px;
  background: #fdfdfd;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  transition: all 0.3s;

  &:hover {
    background-color: #f5f5f5;
    box-shadow: 0 5px 10px #f1f1f1;
    transform: translateY(-2px);
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 18px;
  color: #212124;
`;

export const SignatureIcon = styled.img`
  margin-right: 8px;
`;
