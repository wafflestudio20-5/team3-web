import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { MD_SIZE } from '../../../../constant/breakpoint';

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 480px;
  background: #fff;
  padding: 5px 5px 5px 0;
  border-radius: 30px;

  @media ${MD_SIZE} {
    padding: 0;
    width: 360px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: -apple-system, Noto Sans, sans-serif, Apple Color Emoji;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 1px solid #0017580d;
  border-radius: 30px 30px 0 0;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 50%;
  border: 1px solid #0017580d;
  object-fit: cover;
`;

export const Username = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #212124;
`;

export const Temperature = styled.span`
  margin-left: 5px;
  padding: 0px 5px;
  font-size: 11px;
  color: gray;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 20px;
  margin-top: 3px;
  background-color: #fff;
  border-bottom: 1px solid #0017580d;
  cursor: pointer;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  justify-content: flex-start;

  @media ${MD_SIZE} {
    width: 60%;
  }
`;

export const ProductImg = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  object-fit: cover;
  background: #f4f4f4;
  margin-right: 12px;
`;

export const ProductInfo = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.5s all;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ProductTitle = styled.h1`
  width: 100%;
  font-size: 14px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.h3`
  width: 100%;
  font-size: 14px;
  font-family: 'LINESeedKR-Bd';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MessageWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 390px);
  padding: 0 5px 0 10px;
  min-height: 412px;
  overflow-y: auto;

  @media (max-width: 410px) {
    padding: 0;
  }
`;

export const Li = styled.li`
  list-style-type: none;
`;

export const ChatAccounce = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 100%;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #4d5159;
`;

export const FromMessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: auto;
  min-height: 41px;
  padding: 5px;
`;

export const ToMessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  min-height: 41px;
  padding: 5px;
`;

export const FromMessageBox = styled.span`
  display: inline-flex;
  margin: 0px;
  padding: 10px 14px;
  width: auto;
  height: auto;
  max-width: 65%;
  word-break: break-word;
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.02em;
  border-radius: 20px 2px 20px 20px;
  background-color: #ff6f0f;
  color: rgb(255, 255, 255);

  @media ${MD_SIZE} {
    font-size: 12px;
  }
`;

export const ToMessageBox = styled.span`
  display: inline-flex;
  margin: 0px;
  padding: 10px 14px;
  max-width: 65%;
  word-break: break-word;
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.02em;
  border-radius: 2px 20px 20px;
  background-color: #eaebee;
  color: #212124;

  @media ${MD_SIZE} {
    font-size: 12px;
  }
`;

export const ToMessageProfile = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  border-radius: 50%;
  border: 1px solid #0017580d;
  object-fit: cover;
`;

export const MessageDate = styled.div`
  display: flex;
  align-items: flex-end;
  min-height: 100%;
  padding: 0px 4px;
  margin: 0 4px;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #868b94;
`;

export const TextareaWrapper = styled.div`
  width: calc(100% - 24px);
  height: 125px;
  margin: 16px 8px 16px 16px;
  box-sizing: border-box;
  border: 1px solid #aeaeae;
  border-radius: 8px;
`;

export const Textarea = styled.textarea`
  width: calc(100% - 24px);
  height: 64px;
  margin: 12px 12px 0px;
  padding: 0px;
  resize: none;
  font-size: 14px;
  border: none;
  outline: none;
  color: #212124;
  background-color: #fff;
  -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
  box-shadow: 0 0 0 1000px #ffffff inset;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 38px;
  padding: 0 10px;
`;

interface TextLimitProps extends HTMLAttributes<HTMLSpanElement> {
  length: number;
}

export const TextLimit = styled.span<TextLimitProps>(
  ({ length }) => `
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  padding: 6px 6px 6px 0;
  font-size: 12px;
  line-height: 150%;
  ${length > 255 ? `color: #eb5353` : 'color: #adb1ba;'};
  &:first-of-type {
    padding: 6px 0;
  }
`,
);

interface Button extends HTMLAttributes<HTMLButtonElement> {
  length: number;
  bgColor?: string;
  message?: string;
}

export const Button = styled.button<Button>(
  ({ bgColor, message, length }) => `
  border-radius: 4px;
  width: 64px;
  height: 32px;
  line-height: 150%;
  font-weight: bold;
  font-size: 14px;
  color: rgb(255, 255, 255);
  transition: 0.5s ease 0s, color 0.5s ease 0s;
  ${message ? `background: ${bgColor}` : 'background: #dcdee3'};
  ${length <= 255 ? `background: ${bgColor}` : 'background: #dcdee3'};
`,
);

export const TradeButtonM = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: auto;
  height: 36px;
  line-height: 150%;
  font-weight: bold;
  font-size: 13px;
  padding: 0 12px;
  background-color: #ff6f0f;
  color: rgb(255, 255, 255);
  margin-left: 4px;
  transition: 0.5s all;

  &:hover {
    transform: translateY(-2px);
  }
`;
