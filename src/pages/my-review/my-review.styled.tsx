import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

export const Header = styled.h2`
  width: 400px;
  margin: 30px auto 30px auto;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  width: 95%;
  max-width: 600px;
  align-content: center;
  justify-content: center;
`;

export const Message = styled.h2`
  margin-top: 60px;
  font-size: 20px;
  font-weight: 500;
`;