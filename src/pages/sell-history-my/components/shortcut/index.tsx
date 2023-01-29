import { useState, useRef, useCallback, ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Moment from 'react-moment';
import { toStringNumWithComma } from '../../../../utils/tradePost';
import {
  postConfirmation,
  deleteTradePost,
  updateTradePost,
} from '../../../../store/slices/tradePostSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { redirectWithMsg } from '../../../../utils/errors';
import DeleteModal from '../delete-modal';
import ReviewModal from '../review-modal';
import TradePostUpdate from '../trade-post-update';
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
  desc: string;
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
  desc,
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

  // 글 수정
  const [active, setActive] = useState(false);
  const [openEditPost, setOpenEditPost] = useState(false);
  const [openEditPostImg, setOpenEditPostImg] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [values, setValues] = useState({
    title: title,
    desc: desc,
    price: price,
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value, name } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values?.title, values?.desc, values?.price],
  );

  const handleSubmitEdit = useCallback(() => {
    // VALID TODO: to function
    const numberReg = /^[0-9]+$/;
    if (!values.title?.trim() || !(values.title.length > 2)) {
      toast.warn('제목은 3자 이상이어야 합니다.');
      return;
    } else if (!values.desc?.trim() || !(values.desc.length > 9)) {
      toast.warn('내용은 10자 이상이어야 합니다.');
      return;
    } else if (!String(values.price).trim()) {
      toast.warn('가격을 입력해주세요.');
      return;
    } else if (Number(values.price) < 0) {
      toast.warn('음수는 입력하실 수 없습니다.');
      return;
    } else if (!numberReg.test(String(values.price))) {
      toast.warn('가격은 숫자만 입력가능합니다.');
      return;
    } else if (Number(values.price) % 10 !== 0) {
      toast.warn('1원 단위는 입력하실 수 없습니다.');
      return;
    }

    if (accessToken) {
      dispatch(
        updateTradePost({
          postId: postId,
          accessToken,
          title: values.title,
          desc: values.desc,
          price: values.price,
        }),
      )
        .unwrap()
        .then(() => {
          setOpenEditPost(false);
          toast.success('성공적으로 수정되었습니다.');
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            toast(`🥕 ${err.response?.data.error}`, {
              position: 'top-center',
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          }
        });
    }
  }, [values?.title, values?.desc, values?.price]);

  const handleCloseEditModal = useCallback(() => {
    setOpenEditPost(false);
    setValues({
      title: title,
      desc: desc,
      price: price,
    });
  }, []);

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
          setOpenEditPost={setOpenEditPost}
        />
      )}
      {openEditPost && (
        <TradePostUpdate
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmitEdit}
          handleClose={handleCloseEditModal}
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
