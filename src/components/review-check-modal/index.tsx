import { useEffect, useRef } from 'react';
import close from '../../assets/close.svg';
import * as S from './review-check-modal.styled';
import ReviewInfo from '../review-info';
import { TradePostType } from '../../types/tradePost';

const ReviewCheckModal = ({
  isModalOpen,
  setIsModalOpen,
  // product,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // product: TradePostType;
}) => {
  const modalRef = useRef<any>();
  // const clickOutside = (e: MouseEvent) => {
  //   if (isModalOpen && !modalRef.current.contains(e.target)) {
  //     setIsModalOpen(false);
  //   }
  // };
  // useEffect(() => {
  //   if (isModalOpen) {
  //     window.addEventListener('click', clickOutside);
  //     return () => {
  //       window.removeEventListener('click', clickOutside);
  //     };
  //   }
  // });
  return (
    <S.FixedWrapper>
      <S.Dim>
        <S.Wrapper>
          <S.ModalContainer ref={modalRef}>
            <S.Close onClick={() => setIsModalOpen(false)} src={close} />
            <S.Header>주고받은 후기</S.Header>
            <S.List>
              {/* {product.reviews[0] &&
                product.reviews.map(review => { */}
              <ReviewInfo
                userId={4}
                img={'d'}
                username={'테스트'}
                type={'SELLER'}
                location={'관악구 봉천동'}
                createdAt={new Date()}
                content={
                  '좋았어요 좋았어요 좋았어요 좋았어요 좋았어요 좋았어요 좋았어요 좋았어요 좋았어요 좋았어요 좋았어요 '
                }
              />
              <ReviewInfo
                userId={4}
                img={'d'}
                username={'테스트'}
                type={'SELLER'}
                location={'관악구 봉천동'}
                createdAt={new Date()}
                content={'좋았어요F'}
              />
            </S.List>
          </S.ModalContainer>
        </S.Wrapper>
      </S.Dim>
    </S.FixedWrapper>
  );
};

export default ReviewCheckModal;
