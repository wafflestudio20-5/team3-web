import styled from 'styled-components';
import { MD_SIZE } from '../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100vh;

  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 500px;
  min-width: 300px;
  height: 660px;
  align-items: center;
  border: 1px solid #ced4da;
  border-radius: 12px;
  padding: 28px 12px 16px 12px;
  gap: 22px;

  @media ${MD_SIZE} {
    width: 380px;
  }
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
  padding-left: 6px;
  -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
  box-shadow: 0 0 0 1000px #ffffff inset;
`;

export const H3 = styled.h1`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 400;
  color: #000;
`;
