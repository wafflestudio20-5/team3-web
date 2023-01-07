import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18%;
  width: 500px;
  min-width: 300px;
  height: 660px;
  align-items: center;
  border: 1px solid #ced4da;
  border-radius: 12px;
  padding: 12px;
  gap: 22px;
`;

export const Title = styled.img`
  width: 180px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const H1 = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`;

export const Input = styled.input`
  margin-bottom: 6px;
  width: 340px;
  height: 40px;
  border: 1px solid white;
  border-bottom: 1px solid gray;
  outline: none;
`;

export const H3 = styled.h1`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
`;
