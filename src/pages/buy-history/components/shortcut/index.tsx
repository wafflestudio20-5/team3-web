import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import { toStringNumWithComma } from '../../../../utils/tradePost';
import {
  Container,
  Img,
  Info,
  Title,
  PriceBox,
  Price,
  Location,
  Detail,
  Likes,
  Chats,
  Date,
  More,
  ReviewButton,
} from './shortcut.styled';
import ReviewCheckModal from '../../../../components/review-check-modal';
import TradeStatusButton from '../../../../components/trade-status-button';
import DropDown from '../drop-down';
import alt from '../../../../assets/post-alt.png';
import more from '../../../../assets/more.svg';
import { ReviewHistory } from '../../../../types/review';

interface ShortCut {
  postId: number;
  img: string;
  title: string;
  tradeStatus: string;
  price: number;
  location: string;
  likes: number;
  chats: number;
  created_at: Date;
  reviews: ReviewHistory[];
  seller: any;
  buyer: any;
}

const ShortCut = ({
  postId,
  img,
  title,
  tradeStatus,
  price,
  location,
  likes,
  chats,
  created_at,
  reviews,
  seller,
  buyer,
}: ShortCut) => {
  const navigate = useNavigate();
  const [isDropped, setIsDropped] = useState(false);
  const [isCheckReviewModalOpen, setIsCheckReviewModalOpen] = useState(false);
  const dropDownRef = useRef<any>();
  const clickDropDown = () => {
    setIsDropped(prev => !prev);
  };
  const checkIsReviewed = () => {
    if (reviews[0]) {
      for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].type === 'BUYER') {
          return true;
        }
      }
      return false;
    }
    return false;
  };
  const isReviewed = checkIsReviewed();
  return (
    <>
      <Container>
        <Link to={`/tradepost/${postId}`}>
          <Img
            src={img ? img : alt}
            onError={e => ((e.target as HTMLImageElement).src = alt)}
          />
        </Link>
        <Info>
          <Link to={`/tradepost/${postId}`}>
            <Title>{title}</Title>
          </Link>
          <PriceBox>
            {tradeStatus !== 'TRADING' && (
              <TradeStatusButton tradeStatus={tradeStatus} />
            )}
            <Price>{toStringNumWithComma(price)}원</Price>
          </PriceBox>
          <Location>{location}</Location>
          <Detail>
            <Likes>관심 {likes} · </Likes>
            <Chats>채팅 {chats} · </Chats>
            <Date>
              <Moment fromNow>{created_at}</Moment>
            </Date>
          </Detail>
        </Info>
        <More src={more} ref={dropDownRef} onClick={clickDropDown} />
        {isDropped && (
          <DropDown
            dropDownRef={dropDownRef}
            isDropped={isDropped}
            setIsDropped={setIsDropped}
            postId={postId}
            isReviewed={isReviewed}
            tradeStatus={tradeStatus}
            setIsCheckReviewModalOpen={setIsCheckReviewModalOpen}
          />
        )}
        {!isReviewed && (
          <ReviewButton onClick={() => navigate(`/tradepost/${postId}/review`)}>
            후기 보내기
          </ReviewButton>
        )}
        {tradeStatus === 'COMPLETED' && isReviewed && (
          <ReviewButton onClick={() => setIsCheckReviewModalOpen(true)}>
            후기 확인하기
          </ReviewButton>
        )}
      </Container>
      {isCheckReviewModalOpen && (
        <ReviewCheckModal
          isModalOpen={isCheckReviewModalOpen}
          setIsModalOpen={setIsCheckReviewModalOpen}
          reviews={reviews}
          seller={seller}
          buyer={buyer}
        />
      )}
    </>
  );
};

export default ShortCut;
