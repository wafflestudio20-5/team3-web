import { useState, useEffect, useRef, useCallback, ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ReactS3Client from 'react-aws-s3-typescript';
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
import { loadItem } from '../../../../utils/storage';
import { redirectWithMsg } from '../../../../utils/errors';
import { normalToast } from '../../../../utils/basic-toast-modal';
import DeleteModal from '../delete-modal';
import SendReviewModal from '../send-review-modal';
import ReviewCheckModal from '../../../../components/review-check-modal';
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
  ReviewButton,
} from './shortcut.styled';
import TradeStatusButton from '../../../../components/trade-status-button';
import DropDown from '../drop-down';
import alt from '../../../../assets/post-alt.png';
import more from '../../../../assets/more.svg';
import { ReviewHistory } from '../../../../types/review';

interface ShortCut {
  postId: number;
  img: string;
  imageUrls: string[];
  title: string;
  tradeStatus: string;
  price: number;
  location: string;
  likes: number;
  chats: number;
  created_at: Date;
  desc: string;
  reviews: ReviewHistory[];
  getList: () => void;
  buyer: any;
  seller: any;
}

const ShortCut = ({
  postId,
  img,
  imageUrls,
  title,
  tradeStatus,
  price,
  location,
  likes,
  chats,
  created_at,
  desc,
  getList,
  reviews,
  buyer,
  seller,
}: ShortCut) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accessToken = loadItem('accessToken');
  const [isDropped, setIsDropped] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSendReviewModalOpen, setIsSendReviewModalOpen] = useState(false);
  const [isCheckReviewModalOpen, setIsCheckReviewModalOpen] = useState(false);
  const dropDownRef = useRef<any>();
  const clickDropDown = () => {
    setIsDropped(prev => !prev);
  };

  const checkIsReviewed = () => {
    if (reviews[0]) {
      for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].type === 'SELLER') {
          return true;
        }
      }
      return false;
    }
    return false;
  };
  const isReviewed = checkIsReviewed();

  const handleDeletePost = () => {
    if (accessToken && postId) {
      dispatch(deleteTradePost({ accessToken: accessToken, postId: postId }))
        .unwrap()
        .then(() => {
          toast.success('성공적으로 삭제되었습니다.');
          getList();
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 404) {
              redirectWithMsg(2, err.response?.data.error, () => navigate(-1));
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

  // 글 수정 🚀🚀🚀
  const [active, setActive] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEditPost, setOpenEditPost] = useState(false);

  const [values, setValues] = useState({
    title: title,
    desc: desc,
    price: price,
  });

  useEffect(() => {
    setValues({
      title: title,
      desc: desc,
      price: price,
    });
  }, [postId, openEditPost]);

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

  const handleSubmitEdit = async () => {
    // VALID TODO: to function
    const numberReg = /^[0-9]+$/;
    if (!values.title?.trim() || !(values.title.length > 2)) {
      normalToast('제목은 3자 이상이어야 합니다.');
      return;
    } else if (!values.desc?.trim() || !(values.desc.length > 9)) {
      normalToast('내용은 10자 이상이어야 합니다.');
      return;
    } else if (!String(values.price).trim()) {
      normalToast('가격을 입력해주세요.');
      return;
    } else if (Number(values.price) < 0) {
      normalToast('음수는 입력하실 수 없습니다.');
      return;
    } else if (!numberReg.test(String(values.price))) {
      normalToast('가격은 숫자만 입력가능합니다.');
      return;
    } else if (Number(values.price) % 10 !== 0) {
      normalToast('1원 단위는 입력하실 수 없습니다.');
      return;
    } else if (imgObject.length < 1) {
      normalToast('이미지는 최소 한 장 이상 등록해야 합니다.');
      return;
    } else if (values.title.length > 255) {
      normalToast('제목은 255자까지만 입력 가능합니다.');
      return;
    } else if (values.desc.length > 1000) {
      normalToast('본문은 1000자까지만 입력 가능합니다.');
      return;
    }

    // 삭제
    // setUploadLoading(true);
    // const s3 = new ReactS3Client(s3Config);
    // try {
    //   await s3.deleteFile(imgUrl);
    //   console.log('File deleted');
    //   const newImgs = imgObject.filter(url => {
    //     return imgUrl !== url;
    //   });
    //   setImgObject(newImgs);
    //   setUploadLoading(false);
    // } catch (err) {
    //   console.log(err);
    //   setUploadLoading(false);
    //   // toastify
    //   /* handle the exception */
    // }

    uploadImage()
      .then(imgs => {
        if (accessToken && imgs && imgs.length === imgObject?.length) {
          dispatch(
            updateTradePost({
              postId: postId,
              accessToken,
              title: values.title,
              desc: values.desc,
              price: values.price,
              imgs,
            }),
          )
            .unwrap()
            .then(() => {
              setOpenEditPost(false);
              setImgObject(
                imgs?.map((url, index) => {
                  return {
                    id: index,
                    img: url,
                  };
                }),
              );
              toast.success('성공적으로 수정되었습니다.');
            })
            .catch(err => {
              if (axios.isAxiosError(err)) {
                normalToast(err.response?.data.error);
              }
            });
        }
      })
      .catch(() => {
        normalToast('이미지 업로드에 실패했습니다.');
      });
  };

  const uploadImage = async () => {
    const s3Config = {
      bucketName: process.env.REACT_APP_AWS_BUCKET_NAME || '',
      region: process.env.REACT_APP_AWS_REGION || '',
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY || '',
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY || '',
    };
    const s3 = new ReactS3Client(s3Config);

    const promises = imgObject.map(async elem => {
      if (typeof elem?.img === 'string') {
        return elem?.img;
      } else {
        if (elem?.img) {
          return await s3
            .uploadFile(elem?.img)
            .then(res => {
              return res?.location;
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    });
    return await Promise.all(promises);
  };

  const handleCloseEditModal = useCallback(() => {
    setOpenEditPost(false);
    setValues({
      title: title,
      desc: desc,
      price: price,
    });
    setImgObject(
      imageUrls?.map((url: any, index: number) => {
        return {
          id: index,
          img: url,
        };
      }),
    );
  }, [imageUrls]);

  // 사진
  const [imgObject, setImgObject] = useState<any[]>(
    imageUrls?.map((url: any, index: number) => {
      return {
        id: index,
        img: url,
      };
    }),
  );

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
            postId={postId}
            dropDownRef={dropDownRef}
            isDropped={isDropped}
            setIsDropped={setIsDropped}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            setIsSendReviewModalOpen={setIsSendReviewModalOpen}
            tradeStatus={tradeStatus}
            onTradeConfirmation={handleTradeConfirmation}
            setOpenEditPost={setOpenEditPost}
            isReviewed={isReviewed}
            setIsCheckReviewModalOpen={setIsCheckReviewModalOpen}
          />
        )}
        {tradeStatus === 'COMPLETED' && !isReviewed && (
          <ReviewButton onClick={() => navigate(`/tradepost/${postId}/review`)}>
            후기 보내기
          </ReviewButton>
        )}
        {tradeStatus === 'COMPLETED' && isReviewed && (
          <ReviewButton onClick={() => setIsCheckReviewModalOpen(true)}>
            후기 보기
          </ReviewButton>
        )}
      </Container>
      {openEditPost && (
        <TradePostUpdate
          imgObject={imgObject}
          setImgObject={setImgObject}
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
      {isSendReviewModalOpen && (
        <SendReviewModal
          isSendReviewModalOpen={isSendReviewModalOpen}
          setIsSendReviewModalOpen={setIsSendReviewModalOpen}
          onTradeConfirm={handleTradeConfirmation}
          postId={postId}
        />
      )}
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
