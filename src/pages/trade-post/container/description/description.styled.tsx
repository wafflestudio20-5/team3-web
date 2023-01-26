import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px 0 0 0;
`;

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

export const ChatWrapper = styled.div`
  display: flex;
`;

export const Edit = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  background-color: rgba(243, 243, 243, 0.684);
  padding: 0 12px;
  margin-right: 8px;
  font-size: 14px;
  border-radius: 50%;
`;

export const Like = styled.button`
  width: 40px;
  height: 40px;
  background-color: rgba(243, 243, 243, 0.684);
  padding: 0 12px;
  margin-right: 8px;
  font-size: 14px;
  border-radius: 50%;
`;

export const LikeIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const EditIcon = styled.img`
  width: 100%;
  height: 100%;
`;

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
  font-family: 'LINESeedKR-Bd';
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  font-weight: 400;
  font-size: 16px;
  color: #868e96;
`;

export const Desc = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 8px;
  font-size: 15px;
  white-space: pre-wrap;
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
  font-family: 'LINESeedKR-Bd';
  max-width: 100%;
  font-weight: 500;
  font-size: 20px;
  color: #212529;
  font-weight: 600;
  margin: 0 8px 0 0;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const Date = styled.span`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  color: #868e96;
  word-break: break-word;
  white-space: pre-wrap;
  margin-top: 3px;
`;

export const PriceImg = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

export const TitleImg = styled.img`
  width: 22px;
  height: 32px;
  margin-right: 5px;
  object-fit: cover;
`;

export const DetailText = styled.span`
  word-break: break-word;
  white-space: pre-wrap;
`;

export const Header = styled.h1`
  margin: 5px 10px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 15px;
`;

export const DefaultAnnounce = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 14px;
  color: #757575;
`;

export const Dropdown = styled(motion.div)`
  width: 120px;
  flex-direction: column;
  position: absolute;
  right: calc(100% + 8px);
  top: 0;
  background-color: transparent;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
`;

export const ElemWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
`;

export const Elem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
  color: #8d8d8d;
  transition: all 0.2s;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background: #ececec;
    color: #212124;
  }
`;

export const Delete = styled.span`
  color: #ff7171;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0 20px;
`;

export const DeleteWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px 0 10px;
`;

export const DeleteTitle = styled.h1`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  color: #5f5f5f;
`;

export const DeleteSubtitle = styled.h3`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 13px;
  color: #aeaeae;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Cancel = styled.button`
  width: 60px;
  height: 40px;
  background: #e78111;
  color: #fff;
  margin-left: 8px;
  border-radius: 6px;
  font-family: 'Inter';
  font-size: 14px;
`;
