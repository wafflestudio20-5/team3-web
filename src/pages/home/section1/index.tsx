import * as S from './section1.styled';
import desktopImg from '../../../assets/intro-web/phono-image-1.png';

const Section1 = () => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Text>
          <S.Title>당신 근처의 </S.Title>
          <S.Title>와플마켓</S.Title>
          <S.SubTitle>중고 거래부터 동네 정보까지, 이웃과 함께해요.</S.SubTitle>
          <S.SubTitle>가깝고 따뜻한 당신의 근처를 만들어요.</S.SubTitle>
        </S.Text>
        <S.ImgWrapper>
          <S.DesktopImg src={desktopImg} alt="phone-image-1" />
        </S.ImgWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Section1;
