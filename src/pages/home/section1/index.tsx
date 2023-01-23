import * as S from './section1.styled';

const Section1 = () => {
  return (
    <S.Wrapper id="anchor1">
      <S.Title>중고 거래부터 동네 정보까지, 이웃과 함께해요.</S.Title>
      <S.Title>가깝고 따뜻한 당신의 근처를 만들어요.</S.Title>

      <S.CategoryWrapper id="anchor2">
        <S.Category>유저정보 대표 이미지</S.Category>
        <S.Category>중고거래 대표 이미지</S.Category>
        <S.Category>동네생활 대표 이미지</S.Category>
        <S.Category>그 외의 대표 이미지</S.Category>
      </S.CategoryWrapper>
    </S.Wrapper>
  );
};

export default Section1;
