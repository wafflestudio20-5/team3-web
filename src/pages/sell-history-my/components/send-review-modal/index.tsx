import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import * as S from './send-review-modal.styled';

const SendReviewModal = ({
  isSendReviewModalOpen,
  setIsSendReviewModalOpen,
  onTradeConfirm,
  postId,
}: {
  isSendReviewModalOpen: boolean;
  setIsSendReviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onTradeConfirm: () => void;
  postId: number;
}) => {
  const navigate = useNavigate();
  const modalRef = useRef<any>();
  const clickOutside = (e: MouseEvent) => {
    if (isSendReviewModalOpen && !modalRef.current.contains(e.target)) {
      setIsSendReviewModalOpen(false);
    }
  };
  useEffect(() => {
    if (isSendReviewModalOpen) {
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
            <S.Content>거래가 확정되었습니다!</S.Content>
            <S.Info>따뜻한 후기로 마음을 전달하세요</S.Info>
            <S.ButtonBox>
              <S.ConfirmButton
                onClick={() => navigate(`/tradepost/${postId}/review`)}
              >
                후기 보내기
              </S.ConfirmButton>
              <S.CancelButton onClick={() => setIsSendReviewModalOpen(false)}>
                취소
              </S.CancelButton>
            </S.ButtonBox>
          </S.ModalContainer>
        </S.Wrapper>
      </S.Dim>
    </S.FixedWrapper>
  );
};

export default SendReviewModal;
