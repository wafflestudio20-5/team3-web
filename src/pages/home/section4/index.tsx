import { useNavigate } from 'react-router-dom';

import * as S from './section4.styled';
import sampleImg from '../../../assets/intro-web/phono-image-2.png';

const Section4 = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.BgWrapper id="anchor6">
        {/* TODO: 우리 이미지 */}
        <S.Img
          src={sampleImg}
          data-aos="zoom-in-right"
          data-aos-offset="200"
          data-aos-mirror={true}
          data-aos-duration="1000"
          data-aos-anchor={`#anchor6`}
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="top-bottom"
        />
        <S.TitleWrapper
          data-aos="zoom-in-left"
          data-aos-offset="200"
          data-aos-mirror={true}
          data-aos-duration="1000"
          data-aos-anchor={`#anchor6`}
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="top-bottom"
        >
          <S.Title>현재 인기있는</S.Title>
          <S.Title>물품은 무엇일까요?</S.Title>

          <S.SubtitleWrapper>
            <S.Subtitle>물품 확인 후 판매자와의 채팅을 통해</S.Subtitle>
            <S.Subtitle>가장 먼저 예약하세요!</S.Subtitle>
          </S.SubtitleWrapper>

          <S.Button onClick={() => navigate('/market')}>
            현재 인기매물 보러가기
          </S.Button>
        </S.TitleWrapper>
      </S.BgWrapper>
    </S.Wrapper>
  );
};

export default Section4;
