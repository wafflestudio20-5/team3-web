import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  requestDeleteNeighborhood,
  requestDeleteNeighborhoodComment,
} from '../../../../api/neighborhood';
import { useAppSelector } from '../../../../store/hooks';
import { neighborPost } from '../../../../types/neighborhood';
import * as S from './comment-delete-modal.styled';

interface CommentDeleteModalProps {
  commentId: number;
  handleClose: () => void;
}

export const CommentDeleteModal = ({
  commentId,
  handleClose,
}: CommentDeleteModalProps) => {
  const navigate = useNavigate();
  const { accessToken } = useAppSelector(state => state.session);
  const handleDeleteButtonClick = () => {
    if (accessToken) {
      requestDeleteNeighborhoodComment(commentId, accessToken);
      toast('댓글 삭제가 완료되었어요.');
      handleClose();
      // 마찬가지로 현재 페이지 내에서 refresh를 해주고 싶은데요..
      // navigate(0); // 과 같이 쓰면 auth/refresh 403 에러가 뜹니다
      // 그래서 일단 뒤로가기를 해두었습니다
      navigate(-1);
    }
  };
  return (
    <S.Container>
      <S.Title>정말로 이 댓글을 삭제하시겠습니까?</S.Title>
      <S.Text>삭제한 댓글은 되돌릴 수 없어요</S.Text>
      <S.ButtonWrapper>
        <S.ConfirmButton onClick={handleDeleteButtonClick}>
          삭제
        </S.ConfirmButton>
        <S.CancelButton onClick={handleClose}>취소</S.CancelButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};
