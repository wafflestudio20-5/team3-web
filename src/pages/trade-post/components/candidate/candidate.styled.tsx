import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Div extends HTMLAttributes<HTMLDivElement> {
  animation: boolean;
}

export const Wrapper = styled.div<Div>(
  ({ animation }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  padding: 8px;
  border-radius: 10px;

  @keyframes slide {
    0% {
      transform: rotate(0deg);
    }
    18% {
      transform: rotate(2deg);
    }
    33% {
      transform: rotate(0deg);
    }
    48% {
      transform: rotate(-2deg);
    }
    63% {
      transform: rotate(0deg);
    }
    78% {
      transform: rotate(2deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  animation: ${animation ? 'slide 1.3s ease-in-out' : 'none'};
`,
);

export const InnerWrapper = styled.div`
  display: flex;
  width: 96%;
  height: auto;
  justify-content: space-between;
`

export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 4px;
  object-fit: cover;
`;

export const Text = styled.span`
  font-size: 13px;
  line-height: 21px;
  margin-left: 8px;
  text-align: center;
`;

export const ButtonWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: auto;
`;

export const ChatButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: auto;
  padding: 8px;
  background-color: #ff6f0f;
  font-size: 12px;
  margin-left: 6px;
  border-radius: 5px;
  color: #fff;
`;

export const ReservationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: auto;
  padding: 8px;
  background-color: #1aa174;
  font-size: 12px;
  margin-left: 6px;
  border-radius: 5px;
  color: #fff;
`;

export const TradingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: auto;
  padding: 8px;
  background-color: #e8e8e8;
  font-size: 12px;
  margin-left: 6px;
  border-radius: 5px;
  color: #2c2c2c;
`;

export const Badge = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 6px;
  border: 2px solid #ffcf3e;
`;

export const Complete = styled.span`
  font-size: 11px;
  line-height: 21px;
  margin-left: 6px;
  text-align: center;
  color: #686868;
  font-weight: 600;
`;
