import * as S from './section2.styled';
import desktopImg from '../../../assets/intro-web/phono-image-2.png';

const Section2 = () => {
  return (
    <S.Wrapper>
      <S.ContentWrapper
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
      >
        <S.ImgWrapper>
          <S.DesktopImg src={desktopImg} alt="phone-image-1" />
        </S.ImgWrapper>
        <S.Text>
          <S.Title>우리 동네 </S.Title>
          <S.Title>중고 직거래 마켓</S.Title>
          <S.SubTitle>
            동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
          </S.SubTitle>
          <S.ButtonWrapper>
            <S.Button>인기매물 보기</S.Button>
            <S.Button>믿을 수 있는 중고거래</S.Button>
          </S.ButtonWrapper>
        </S.Text>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Section2;
