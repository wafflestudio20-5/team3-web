import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Button extends HTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  min-width: 300px;
  height: 600px;
  align-items: center;
  border: 1px solid #ced4da;
  border-radius: 12px;
  padding: 12px;
  gap: 20px;
`;

export const H1 = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 340px;
  height: 40px;
  border: 1px solid white;
  border-bottom: 1px solid gray;
  outline: none;
`;

export const H3 = styled.h1`
  margin-top: 30px;
`;
