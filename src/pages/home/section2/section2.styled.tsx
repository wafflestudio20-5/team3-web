import styled from 'styled-components';
import { LG_SIZE, MD_SIZE } from '../../../constant/breakpoint';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  position: relative;

  @media ${MD_SIZE} {
    height: auto;
  }
`;

export const AbsoluteBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 912px;
  right: 0;
  height: auto;

  @media ${LG_SIZE} {
    width: 700px;
    position: relative;
    align-items: center;
  }

  @media ${MD_SIZE} {
    height: auto;
    width: auto;
    position: relative;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-family: 'LINESeedKR-Bd';
  width: 500px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 40px;
  border-radius: 10px 0 0 10px;
  font-size: 28px;
  color: #fff;
  background: -webkit-linear-gradient(
    -35deg,
    rgb(255, 184, 0),
    rgb(255, 131, 0)
  );
  background: linear-gradient(-35deg, rgb(255, 106, 0), rgb(254, 155, 50));

  @media ${LG_SIZE} {
    font-size: 26px;
    width: 450px;
    height: 70px;
    justify-content: center;
    padding-left: 0;
    border-radius: 10px;
  }

  @media ${MD_SIZE} {
    width: 340px;
    height: 60px;
    font-size: 22px;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
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
  width: 280px;
  height: 380px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
  height: 45%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${LG_SIZE} {
    padding: 15px;
  }

  @media ${MD_SIZE} {
    padding: 25px;
  }
`;

export const CardTitle = styled.h2`
  width: 100%;
  height: auto;
  font-size: 23px;
  display: flex;
  justify-content: flex-start;
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
  margin-top: 15px;
  width: 100%;
  height: auto;
  color: #787878;
  font-size: 14px;

  @media ${LG_SIZE} {
    font-size: 11px;
    margin-top: 6px;
  }
  @media ${MD_SIZE} {
    font-size: 14px;
    margin-top: 15px;
  }
`;

export const CardSubtitleType2 = styled(CardSubtitle)`
  text-align: right;
`;
