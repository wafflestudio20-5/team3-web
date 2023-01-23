import styled from 'styled-components';
import { MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
`;

export const BgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 80px;
  background-color: rgb(230, 243, 230);

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 80px 0;
  }
`;

export const Img = styled.img`
  width: 532px;
  height: 684px;

  @media ${MD_SIZE} {
    width: 360px;
    height: auto;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  font-family: 'LINESeedKR-Bd';
  font-size: 40px;
  color: #404040;

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media ${MD_SIZE} {
    font-size: 30px;
  }
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  width: auto;
  height: auto;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Subtitle = styled.h4`
  font-size: 16px;
  color: #545657;
  font-weight: 300;

  @media (max-width: 900px) {
    justify-content: center;
  }
  @media ${MD_SIZE} {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  width: auto;
  height: auto;
  padding: 14px 26px;
  margin-top: 40px;
  color: #232424;
  background: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  transition: 0.3s all;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f1f3f5;
  }
`;
