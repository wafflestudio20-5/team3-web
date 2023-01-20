import * as S from './section5.styled';
import joinUs from '../../../assets/intro-joinus.png';

const Section5 = () => {
  return (
    <S.Wrapper>
      <S.BgWrapper>
        <S.ImgWrapper>
          <S.Img src={joinUs} />
        </S.ImgWrapper>
        <S.Title>지금 시작하세요.</S.Title>
        <S.Button
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="top-bottom"
        >
          와플마켓 시작하기
        </S.Button>
      </S.BgWrapper>
    </S.Wrapper>
  );
};

export default Section5;
