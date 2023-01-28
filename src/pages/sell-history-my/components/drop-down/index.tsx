import { useEffect } from 'react';
import * as S from './drop-down.styled';

const DropDown = ({
  dropDownRef,
  isDropped,
  setIsDropped,
  setIsDeleteModalOpen,
  setIsReviewModalOpen,
  tradeStatus,
  onTradeConfirmation,
}: {
  dropDownRef: any;
  isDropped: boolean;
  setIsDropped: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsReviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tradeStatus: string;
  onTradeConfirmation: () => void;
}) => {
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
    console.log('판매완료로 변경')
    onTradeConfirmation();
    setIsReviewModalOpen(true);
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
        <S.Elem>수정하기</S.Elem>
        <S.ElemRed onClick={() => setIsDeleteModalOpen(true)}>
          삭제하기
        </S.ElemRed>
      </S.ElemWrapper>
    </S.Container>
  );
};

export default DropDown;
