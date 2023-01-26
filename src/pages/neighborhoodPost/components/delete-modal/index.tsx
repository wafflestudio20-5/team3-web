import { useNavigate } from 'react-router-dom';
import { requestDeleteNeighborhood } from '../../../../api/neighborhood';
import { useAppSelector } from '../../../../store/hooks';
import { neighborPost } from '../../../../types/neighborhood';
import * as S from './delete-modal.style';

interface DeleteModalProps {
  post: neighborPost;
  handleClose: () => void;
}

export const DeleteModal = ({ post, handleClose }: DeleteModalProps) => {
  const navigate = useNavigate();
  const { accessToken } = useAppSelector(state => state.session);
  const handleDeleteButtonClick = () => {
    if (accessToken) {
      requestDeleteNeighborhood(post.postId, accessToken).then(() =>
        navigate('/neighborhood'),
      );
    }
  };
  return (
    <S.Container>
      <S.Title>정말로 이 게시물을 삭제하시겠습니까?</S.Title>
      <S.Text>삭제한 게시물은 되돌릴 수 없어요</S.Text>
      <S.ButtonWrapper>
        <S.ConfirmButton onClick={handleDeleteButtonClick}>
          삭제
        </S.ConfirmButton>
        <S.CancelButton onClick={handleClose}>취소</S.CancelButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};
