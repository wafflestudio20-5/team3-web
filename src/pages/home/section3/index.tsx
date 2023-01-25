import * as S from './section3.styled';
import card4 from '../../../assets/card4.png';
import card5 from '../../../assets/card5.png';
import card6 from '../../../assets/card6.png';

const Section3 = () => {
  return (
    <S.Wrapper id="anchor5">
      <S.AbsoluteBox>
        <S.Title
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-mirror={true}
          data-aos-duration="1000"
          data-aos-anchor={`#anchor4`}
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="top-center"
        >
          이웃과 함께 나누는 동네생활
        </S.Title>

        <S.CardWrapper
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-mirror={true}
          data-aos-duration="1000"
          data-aos-anchor={`#anchor5`}
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="top-center"
        >
          <S.Card>
            <S.CardType1Img src={card6} />
            <S.CardContent>
              <S.CardTitle>우리동네 이야기</S.CardTitle>
              <S.CardSubtitle>
                동네별 게시판을 통해
                <br />
                우리동네 얘기와 소식을 나눌 수 있어요.
                <br />
                이번 주에는 어떤 얘기가 오갈까요?
              </S.CardSubtitle>
            </S.CardContent>
          </S.Card>
          <S.Card>
            <S.CardContent>
              <S.CardTitle>함께하는 티키타카</S.CardTitle>
              <S.CardSubtitle>
                게시글의 댓글과 대댓글 기능을 통해
                <br />
                가까운 이웃과 의견을 주고받을 수 있어요.
                <br />
                와플마켓으로 쉽고 편하게 소통하세요!
              </S.CardSubtitle>
            </S.CardContent>
            <S.CardType2Img src={card5} />
          </S.Card>
          <S.Card>
            <S.CardType1Img src={card4} />
            <S.CardContent>
              <S.CardTitleType2>동네모임</S.CardTitleType2>
              <S.CardSubtitleType2>
                관심사가 비슷한 이웃과는
                <br />
                온오프라인으로도 만날 수 있어요.
                <br />
                약속을 잡고, 우리동네 모임에 참여하세요.
                <br />
              </S.CardSubtitleType2>
            </S.CardContent>
          </S.Card>
        </S.CardWrapper>
      </S.AbsoluteBox>
    </S.Wrapper>
  );
};

export default Section3;
