import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import * as S from './drop-down.styled';

const DropDown = ({
  postId,
  dropDownRef,
  isDropped,
  setIsDropped,
  setIsDeleteModalOpen,
  setIsSendReviewModalOpen,
  tradeStatus,
  onTradeConfirmation,
  setOpenEditPost,
  isReviewed,
  setIsCheckReviewModalOpen,
}: {
  postId: number;
  dropDownRef: any;
  isDropped: boolean;
  setIsDropped: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSendReviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tradeStatus: string;
  onTradeConfirmation: () => void;
  setOpenEditPost: React.Dispatch<React.SetStateAction<boolean>>;
  isReviewed: boolean;
  setIsCheckReviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const clickOutside = (e: MouseEvent) => {
    if (isDropped && !dropDownRef.current.contains(e.target)) {
      setIsDropped(false);
    }
  };
  useEffect(() => {
    if (isDropped) {
      window.addEventListener('click', clickOutside);
      return () => {
        window.removeEventListener('click', clickOutside);
      };
    }
  });

  const onConfirmation = () => {
    console.log('판매완료로 변경');
    onTradeConfirmation();
    setIsSendReviewModalOpen(true);
  };

  // TODO: 상품 수정 및 삭제하기 추가

  return (
    <S.Container
      initial={isDropped ? 'open' : 'close'}
      animate={isDropped ? 'open' : 'close'}
      variants={{
        open: { height: 'auto' },
        close: { height: 0 },
      }}
    >
      <S.ElemWrapper>
        {tradeStatus === 'RESERVATION' && (
          <S.Elem onClick={onConfirmation}>판매완료로 변경</S.Elem>
        )}
        {tradeStatus === 'COMPLETED' && !isReviewed && (
          <S.Elem onClick={() => navigate(`/tradepost/${postId}/review`)}>
            후기 보내기
          </S.Elem>
        )}
        {tradeStatus === 'COMPLETED' && isReviewed && (
          <S.Elem onClick={() => setIsCheckReviewModalOpen(true)}>
            보낸 후기 보기
          </S.Elem>
        )}
        <S.Elem onClick={() => setOpenEditPost(true)}>수정하기</S.Elem>
        <S.ElemRed onClick={() => setIsDeleteModalOpen(true)}>
          삭제하기
        </S.ElemRed>
      </S.ElemWrapper>
    </S.Container>
  );
};

export default DropDown;
