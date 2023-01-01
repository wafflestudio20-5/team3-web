import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { COLOR_CARROT } from '../../constant';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 100vh;
  min-width: 1160px;

  padding: 100px 200px;
`;

interface Span extends HTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export const Span = styled.span<Span>(
  ({ color }) => `
  margin-top: 20px;
  color: ${color || 'black'};
font-size: 40px;
font-weight: 600;`,
);

export const SendAgainWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 50px 40px;
`;

export const SendAgainSpan = styled(Span)`
  font-size: 30px;
  font-weight: 400;
`;

export const Button = styled.button`
  width: 100%;
  height: 70px;
  margin-top: auto;

  border-radius: 10px;
  background-color: ${COLOR_CARROT};
  color: white;
  font-size: 30px;
  font-weight: 700;
`;

export const SendAgainButton = styled(Button)`
  width: 40%;
`;
