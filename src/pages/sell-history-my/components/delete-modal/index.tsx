import { useEffect, useRef } from 'react';
import * as S from './delete-modal.styled';

const DeleteModal = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  onDeletePost,
}: {
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDeletePost: () => void;
}) => {
  const modalRef = useRef<any>();
  const onDelete = () => {
    onDeletePost();
    setIsDeleteModalOpen(false);
    location.reload();
  };
  const clickOutside = (e: MouseEvent) => {
    if (isDeleteModalOpen && !modalRef.current.contains(e.target)) {
      setIsDeleteModalOpen(false);
    }
  };
  useEffect(() => {
    if (isDeleteModalOpen) {
      window.addEventListener('click', clickOutside);
      return () => {
        window.removeEventListener('click', clickOutside);
      };
    }
  });
  return (
    <S.FixedWrapper>
      <S.Dim>
        <S.Wrapper>
          <S.ModalContainer ref={modalRef}>
            <S.Content>정말 삭제하시겠습니까?</S.Content>
            <S.Info>삭제한 게시글은 되돌릴 수 없어요</S.Info>
            <S.ButtonBox>
              <S.ConfirmButton onClick={onDelete}>삭제</S.ConfirmButton>
              <S.CancelButton onClick={() => setIsDeleteModalOpen(false)}>
                취소
              </S.CancelButton>
            </S.ButtonBox>
          </S.ModalContainer>
        </S.Wrapper>
      </S.Dim>
    </S.FixedWrapper>
  );
};

export default DeleteModal;
