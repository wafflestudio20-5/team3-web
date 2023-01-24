import { useNavigate } from 'react-router-dom';
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
  const { accessToken } = useAppSelector(state => state.session);
  const handleDeleteButtonClick = () => {
    if (accessToken) {
      requestDeleteNeighborhoodComment(commentId, accessToken);
      toast('댓글 삭제가 완료되었어요.');
      handleClose();
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
