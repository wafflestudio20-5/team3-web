import styled from 'styled-components';
import { LG_SIZE, MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 200px;
  background: transparent;

  @media ${MD_SIZE} {
    height: auto;
  }
`;

export const AbsoluteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 0;
  width: 912px;
  height: auto;

  @media ${LG_SIZE} {
    position: relative;
    align-items: center;
    width: 700px;
  }

  @media ${MD_SIZE} {
    position: relative;
    align-items: center;
    width: auto;
    height: auto;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
  height: 80px;
  padding-left: 60px;
  border-radius: 10px 0 0 10px;
  font-family: 'LINESeedKR-Bd';
  font-size: 28px;
  color: #fff;
  background: linear-gradient(-35deg, rgb(255, 106, 0), rgb(254, 155, 50));

  @media ${LG_SIZE} {
    justify-content: center;
    width: 450px;
    height: 70px;
    padding-left: 0;
    border-radius: 10px;
    font-size: 26px;
  }

  @media ${MD_SIZE} {
    width: 340px;
    height: 60px;
    font-size: 22px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 70px;
  gap: 20px;

  @media ${LG_SIZE} {
    gap: 15px;
  }

  @media ${MD_SIZE} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 380px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);

  @media ${LG_SIZE} {
    width: 220px;
    height: 270px;
  }

  @media ${MD_SIZE} {
    width: 280px;
    height: 380px;
  }
`;

export const CardType1Img = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

export const CardType2Img = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
  border-radius: 0 0 20px 20px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 45%;
  padding: 25px;

  @media ${LG_SIZE} {
    padding: 20px;
  }

  @media ${MD_SIZE} {
    padding: 25px;
  }
`;

export const CardTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  font-size: 23px;
  font-weight: 600;
  color: #393939;

  @media ${LG_SIZE} {
    font-size: 18px;
  }
  @media ${MD_SIZE} {
    font-size: 23px;
  }
`;

export const CardTitleType2 = styled(CardTitle)`
  justify-content: flex-end;
`;

export const CardSubtitle = styled.h5`
  width: 100%;
  height: auto;
  margin-top: 15px;
  color: #787878;
  font-size: 14px;

  @media ${LG_SIZE} {
    margin-top: 6px;
    font-size: 11px;
  }
  @media ${MD_SIZE} {
    margin-top: 15px;
    font-size: 14px;
  }
`;

export const CardSubtitleType2 = styled(CardSubtitle)`
  text-align: right;
`;

export const ArrowWrapper = styled.div`
  margin-top: 20px;
  width: 50%;
  display: flex;
  justify-content: flex-start;

  @keyframes updown {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  animation: updown 1.5s infinite;

  @media ${MD_SIZE} {
    width: 100%;
    justify-content: center;
  }
`;

export const Span = styled.span`
  font-family: 'Cafe24Ssurround';
  margin-top: 15px;
  color: #9d9d9d;
  font-size: 14px;
`;
