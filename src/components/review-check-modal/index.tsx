import { useEffect, useRef } from 'react';
import close from '../../assets/close.svg';
import * as S from './review-check-modal.styled';
import ReviewInfo from '../review-info';
import defaultImg from '../../assets/default-profile.png';
import { ReviewHistory } from '../../types/review';
import { User } from '../../types/users';

const ReviewCheckModal = ({
  isModalOpen,
  setIsModalOpen,
  reviews,
  seller,
  buyer,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  reviews: any;
  seller: User;
  buyer: User;
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
  const getReview = (reviews: any) => {
    const result = { buyerReview: {} as any, sellerReview: {} as any };
    if (reviews[0]) {
      for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].type === 'BUYER') {
          result.buyerReview = reviews[i];
        } else {
          result.sellerReview = reviews[i];
        }
      }
      return result;
    } else {
      return null;
    }
  };
  const buyerReview = getReview(reviews)?.buyerReview;
  const sellerReview = getReview(reviews)?.sellerReview;

  return (
    <S.FixedWrapper>
      <S.Dim>
        <S.Wrapper>
          <S.ModalContainer ref={modalRef}>
            <S.Close onClick={() => setIsModalOpen(false)} src={close} />
            <S.Header>주고받은 후기</S.Header>
            {reviews[0] && (
              <S.List>
                {sellerReview.id && (
                  <ReviewInfo
                    userId={seller.id}
                    img={seller.imgUrl ? seller.imgUrl : defaultImg}
                    username={seller.username}
                    type={'SELLER'}
                    location={seller.location}
                    createdAt={sellerReview.createdAt}
                    content={sellerReview.content}
                  />
                )}
                {buyerReview.id && (
                  <ReviewInfo
                    userId={buyer.id}
                    img={buyer.imgUrl ? buyer.imgUrl : defaultImg}
                    username={buyer.username}
                    type={'BUYER'}
                    location={buyer.location}
                    createdAt={buyerReview.createdAt}
                    content={buyerReview.content}
                  />
                )}
              </S.List>
            )}
            {!reviews[0] && <S.List>등록된 후기가 없습니다</S.List>}
          </S.ModalContainer>
        </S.Wrapper>
      </S.Dim>
    </S.FixedWrapper>
  );
};

export default ReviewCheckModal;
