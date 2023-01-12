import Gnb from '../../components/gnb';
import * as S from './sendReview.styled';
import Product from './components/product';
import Score from './components/score';

const SendReview = () => {
  const title1 = 'User님,\nUser2님과 거래가 어떠셨나요?';
  return (
    <>
      <Gnb />
      <S.Wrapper>
        <Product />
        <S.Title>{title1}</S.Title>
        <S.SubTitle>거래 선호도는 나만 볼 수 있어요.</S.SubTitle>
        <S.ScoreBox>
          <Score />
          <Score />
          <Score />
        </S.ScoreBox>
        <S.Title>따뜻한 거래 경험을 알려주세요!</S.Title>
        <S.SubTitle>
          남겨주신 거래 후기는 상대방의 프로필에 공개돼요.
        </S.SubTitle>
        <S.Review placeholder="여기에 적어주세요. (선택사항)" />
        <S.Button>후기 보내기</S.Button>
      </S.Wrapper>
    </>
  );
};

export default SendReview;
