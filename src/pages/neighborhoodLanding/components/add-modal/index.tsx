import * as S from './add-modal.styled';

interface AddModalProps {
  handleClose: () => void;
}

export const AddModal = ({ handleClose }: AddModalProps) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.SpanClose onClick={handleClose}>닫기</S.SpanClose>
        <S.SpanTitle>동네생활 글쓰기</S.SpanTitle>
        <S.SpanComplete>완료</S.SpanComplete>
      </S.TopWrapper>
      <S.DescWrapper>
        <S.Desc placeholder="우리 동네 관련된 질문이나 이야기를 해보세요." />
      </S.DescWrapper>
      <S.NoticeWrapper>
        <S.NoticeTitleSpan>글 작성하기 전에 알려드려요.</S.NoticeTitleSpan>
        <S.NoticeSpan>
          중고거래 관련 명예훼손 글은 올리실 수 없어요.
        </S.NoticeSpan>
      </S.NoticeWrapper>
    </S.Container>
  );
};
