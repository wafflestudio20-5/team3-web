import { useNavigate } from 'react-router-dom';

import * as S from './section5.styled';
import joinUs from '../../../assets/intro-joinus.png';
import { ReactComponent as ArrowDown } from '../../../assets/arrow-down.svg';

const Section5 = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.BgWrapper>
        <S.ImgWrapper>
          <S.Img src={joinUs} />
        </S.ImgWrapper>
        <S.Title>와플마켓, 지금 같이해요.</S.Title>
        <S.Subtitle>클릭해 함께하기</S.Subtitle>
        <S.ArrowWrapper>
          <ArrowDown />
        </S.ArrowWrapper>

        <S.Button
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="top-bottom"
          onClick={() => navigate('/market')}
        >
          와플마켓 시작하기
        </S.Button>
      </S.BgWrapper>
    </S.Wrapper>
  );
};

export default Section5;
