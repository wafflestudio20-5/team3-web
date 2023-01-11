import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px 0;
`;

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ChatWrapper = styled.div``;

export const TradeStatus = styled.span`
  display: flex;
  align-items: center;
  width: auto;
  height: 40px;
  padding: 0 15px;
  background: #ffffff;
  border: 1px solid #868b94;
  border-radius: 50px;
  box-sizing: border-box;
  font-size: 14px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  font-weight: 400;
  font-size: 16px;
  color: #bbbbbb;
`;

export const Desc = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 25px;
  font-size: 15px;
`;

export const DetailInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 40px;
  font-size: 12px;
  line-height: 19px;
  color: #868e96;
  border-bottom: 1px solid #bdbdbd51;
`;

export const Title = styled.span`
  max-width: 70%;
  font-weight: 500;
  font-size: 20px;
  color: #212529;
  margin-right: 6px;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const Date = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #868e96;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const PriceImg = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-top: 2px;
`;

export const TitleImg = styled.img`
  width: 22px;
  height: 32px;
  margin-right: 5px;
`;

export const DetailText = styled.span`
  word-break: break-word;
  white-space: pre-wrap;
`;
