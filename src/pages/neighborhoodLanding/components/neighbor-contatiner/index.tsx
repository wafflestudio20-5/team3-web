import { ShortCut } from '../neighbor-shortcut';
import * as S from './neighbor-container.styled';

export const NeighborContainer = () => {
  const LONG_TEXT =
    '엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! 엄청 긴 텍스트! ';

  return (
    <>
      <S.Container>
        <S.TopTextWrapper>
          <S.TopText>동네정보</S.TopText>
        </S.TopTextWrapper>
        <ShortCut content="1내용내용내용" location="주소주소주소" />
        <ShortCut
          content="2내용내용내용"
          location="주소주소주소"

          likeCount={7}
        />
        <ShortCut
          content={LONG_TEXT}
          location="주소주소주소"
          commentCount={5}
        />
        <ShortCut
          content="4내용내용내용"
          location="주소주소주소"
          likeCount={3}
          commentCount={10}
        />

        <ShortCut content="5내용내용내용" location="주소주소주소" />
        <ShortCut content="6내용내용내용" location="주소주소주소" />
        <ShortCut content="7내용내용내용" location="주소주소주소" />
        <ShortCut content="8내용내용내용" location="주소주소주소" />
        <S.MoreTextWrapper>
          <S.MoreText>더보기</S.MoreText>
        </S.MoreTextWrapper>
      </S.Container>
    </>
  );
};
