import * as S from './section2.styled';
import card1 from '../../../assets/card1.png';
import card2 from '../../../assets/card2.png';
import card3 from '../../../assets/card3.png';

const Section2 = () => {
  return (
    <S.Wrapper>
      <S.AbsoluteBox>
        <S.Title
          id="anchor3"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-mirror={true}
          data-aos-duration="1000"
          data-aos-anchor={`#anchor2`}
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="top-center"
        >
          우리동네 중고 직거래 마켓
        </S.Title>

        <S.CardWrapper
          id="anchor4"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-mirror={true}
          data-aos-duration="1000"
          data-aos-anchor={`#anchor3`}
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="top-center"
        >
          <S.Card>
            <S.CardType1Img src={card1} />
            <S.CardContent>
              <S.CardTitle>당신 근처의 거래</S.CardTitle>
              <S.CardSubtitle>
                와플마켓은 주변 이웃들과
                <br />
                거래할 수 있어요.
                <br />
                택배거래보다 직거래를 권장해요.
                <br />
                가까운 이웃과 따뜻하게 거래하세요!
              </S.CardSubtitle>
            </S.CardContent>
          </S.Card>
          <S.Card>
            <S.CardContent>
              <S.CardTitle>1:1 와플채팅</S.CardTitle>
              <S.CardSubtitle>
                와플마켓 내의 채팅을 통해
                <br />
                개인정보 공유 없이도 거래할 수 있어요.
                <br />
                1:1 채팅으로 약속을 잡아
                <br />
                보다 쉽고 편하게 거래하세요!
              </S.CardSubtitle>
            </S.CardContent>
            <S.CardType2Img src={card2} />
          </S.Card>
          <S.Card>
            <S.CardType1Img src={card3} />
            <S.CardContent>
              <S.CardTitleType2>매너온도 확인</S.CardTitleType2>
              <S.CardSubtitleType2>
                거래 전 상대방의 매너온도를 확인하세요.
                <br />
                36.5도에서 시작하는 매너온도는
                <br />
                따뜻한 거래를 많이 할수록 높아진답니다.
                <br />
              </S.CardSubtitleType2>
            </S.CardContent>
          </S.Card>
        </S.CardWrapper>
      </S.AbsoluteBox>
    </S.Wrapper>
  );
};

export default Section2;
