import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 150px;
  background: transparent;
  @media ${MD_SIZE} {
    height: auto;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'LINESeedKR-Bd';
  font-size: 30px;
  color: #404040;

  @media ${MD_SIZE} {
    font-size: 18px;
  }
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 60px;

  @media ${MD_SIZE} {
    height: 650px;
  }
`;

export const InnerWrapper = styled(Carousel)`
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const Background1 = styled.div`
  width: 100%;
  height: 467px;
  background: #e27c43;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${MD_SIZE} {
    height: 580px;
  }
`;

export const Background2 = styled(Background1)`
  background: #ffe7d1;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  gap: 40px;

  @media ${MD_SIZE} {
    flex-direction: column;
  }
`;

export const SliderImg = styled.img`
  width: 371px;
  height: auto;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const AppLogoA = styled.img`
  width: 47px;
  height: 47px;
  margin-bottom: 30px;
`;

export const PhraseA1 = styled.img`
  width: 286px;
  height: auto;
  margin-bottom: 22px;
`;

export const PhraseA2 = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  margin-bottom: 35px;
`;

export const PhraseB1 = styled.img`
  width: 259px;
  height: auto;
  margin-bottom: 19px;
  margin-top: 50px;
`;

export const PhraseB2 = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #ff7e36;
  margin-bottom: 33px;
`;

export const AppLogoB = styled.img`
  width: 47px;
  height: 47px;
`;

export const PhraseC1 = styled.img`
  width: 277px;
  height: auto;
  margin-bottom: 22px;
`;

export const PhraseC2 = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  white-space: pre-line;
  margin-bottom: 35px;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;

export const AppLogoC = styled.img`
  width: 47px;
  height: 47px;
`;
