import styled from 'styled-components';
import { MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 200px 0 300px 0;

  @media ${MD_SIZE} {
    margin: 100px 0 200px 0;
  }
`;

export const BgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 80px 0 120px 0;
  background-color: #fff;

  @media (max-width: 900px) {
    padding: 80px 0;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 230px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);

  @media ${MD_SIZE} {
    width: 190px;
    height: 190px;
  }
`;
export const Img = styled.img`
  width: 160px;
  height: 150px;

  @media ${MD_SIZE} {
    width: 120px;
    height: 110px;
  }
`;

export const Title = styled.h1`
  margin: 28px 0 60px 0;
  font-family: 'LINESeedKR-Bd';
  font-size: 40px;
  color: #404040;

  @media ${MD_SIZE} {
    font-size: 30px;
    margin: 28px 0 42px 0;
  }
`;

export const Button = styled.button`
  width: auto;
  height: auto;
  padding: 18px 34px;
  color: #fff;
  background: #ff6f06;
  font-size: 18px;
  font-weight: 700;
  border-radius: 60px;
  transition: 0.3s all;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    background: #ff5906;
  }
`;
