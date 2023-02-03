import useThrottle from '../../../../hooks/useThrottle';
import * as S from './edit-and-delete.styled';

interface EditDeleteProps {
  handleEditClick: () => void;
  handleDeleteClick: () => void;
}

export const EditDelete = ({
  handleEditClick,
  handleDeleteClick,
}: EditDeleteProps) => {
  const { isDisabled, throttle } = useThrottle(1000);
  return (
    <S.Wrapper>
      <S.Edit onClick={() => throttle(handleEditClick)}>수정</S.Edit>
      <S.Delete onClick={handleDeleteClick}>삭제</S.Delete>
    </S.Wrapper>
  );
};
