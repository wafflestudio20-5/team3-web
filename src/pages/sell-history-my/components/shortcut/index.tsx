import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Moment from 'react-moment';
import { toStringNumWithComma } from '../../../../utils/tradePost';
import {
  postConfirmation,
  deleteTradePost,
} from '../../../../store/slices/tradePostSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { redirectWithMsg } from '../../../../utils/errors';
import DeleteModal from '../delete-modal';
import ReviewModal from '../review-modal';
import {
  Container,
  Img,
  Div,
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
} from './shortcut.styled';
import TradeStatusButton from '../../../../components/trade-status-button';
import DropDown from '../drop-down';
import alt from '../../../../assets/post-alt.png';
import more from '../../../../assets/more.svg';

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
}: ShortCut) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const [isDropped, setIsDropped] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const dropDownRef = useRef<any>();
  const clickDropDown = () => {
    setIsDropped(prev => !prev);
  };
  const handleDeletePost = () => {
    if (accessToken && postId) {
      dispatch(deleteTradePost({ accessToken: accessToken, postId: postId }))
        .unwrap()
        .then(() => {
          toast.success('성공적으로 삭제되었습니다.');
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 404) {
              redirectWithMsg(2, err.response?.data.error, () => navigate(-1));
            } else if (err.response?.status === 401) {
              // TODO: refresh 후 재요청
              redirectWithMsg(2, err.response?.data.error, () =>
                navigate('/login'),
              );
            } else if (err.response?.status === 400) {
              toast.error(err.response?.data.error);
            } else {
              redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                navigate('/'),
              );
            }
          }
        });
    }
  };
  const handleTradeConfirmation = () => {
    if (accessToken && postId) {
      dispatch(postConfirmation({ accessToken: accessToken, postId: postId }))
        .unwrap()
        .then(() => {
          toast('판매 완료로 변경되었습니다');
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 404) {
              redirectWithMsg(2, err.response?.data.error, () => navigate(-1));
            } else if (err.response?.status === 401) {
              // TODO: refresh 후 재요청
              redirectWithMsg(2, err.response?.data.error, () =>
                navigate('/login'),
              );
            } else if (err.response?.status === 400) {
              toast.error(err.response?.data.error);
            } else {
              redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                navigate('/'),
              );
            }
          }
        });
    }
  };
  return (
    <Container>
      <Link to={`/tradepost/${postId}`}>
        <Img
          src={img ? img : alt}
          onError={e => ((e.target as HTMLImageElement).src = alt)}
        />
      </Link>
      <Div>
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
      </Div>
      {isDropped && (
        <DropDown
          dropDownRef={dropDownRef}
          isDropped={isDropped}
          setIsDropped={setIsDropped}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          setIsReviewModalOpen={setIsReviewModalOpen}
          tradeStatus={tradeStatus}
          onTradeConfirmation={handleTradeConfirmation}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          onDeletePost={handleDeletePost}
        />
      )}
      {isReviewModalOpen && (
        <ReviewModal
          isReviewModalOpen={isReviewModalOpen}
          setIsReviewModalOpen={setIsReviewModalOpen}
          onTradeConfirm={handleTradeConfirmation}
          postId={postId}
        />
      )}
    </Container>
  );
};

export default ShortCut;
