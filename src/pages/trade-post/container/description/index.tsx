import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import ReactS3Client from 'react-aws-s3-typescript';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/ko';
import { toast } from 'react-toastify';

import Button from '../../components/button';
import Candidate from '../../components/candidate';
import ModalWrapper from '../../../../components/modal-wrapper';
import TradePostUpdate from '../../../../components/trade-post-update';

import {
  getTradeStatusKo,
  toStringNumWithComma,
} from '../../../../utils/tradePost';
import {
  deleteTradePost,
  getReservation,
  getTradePost,
  postLike,
  updateTradePost,
} from '../../../../store/slices/tradePostSlice';

import { loadItem } from '../../../../utils/storage';
import { redirectWithMsg } from '../../../../utils/errors';
import { getUUID } from '../../../../store/slices/chatSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

import * as S from './description.styled';
import price from '../../../../assets/price.svg';
import editPost from '../../../../assets/edit-post.svg';
import likeFill from '../../../../assets/like-fill.svg';
import likeBlank from '../../../../assets/like-blank.svg';

const Description = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const postId = Number(useParams().id);

  const [modalOpen, setModalOpen] = useState(false);
  const [likeIcon, setLikeIcon] = useState(likeBlank);
  const [candidatesLoading, setCandidatesLoading] = useState(false);

  const accessToken = loadItem('accessToken');
  const { candidates, tradePost, buyer, tradeStatus, isLiked, imageUrls } =
    useAppSelector(state => state.tradePost);

  // DESC: 작성 날짜 한글로
  useEffect(() => {
    moment.locale('ko');
  }, []);

  // DESC: 좋아요 아이콘 fill 변경
  useEffect(() => {
    if (isLiked) {
      setLikeIcon(likeFill);
    } else {
      setLikeIcon(likeBlank);
    }
  }, [isLiked]);

  // DESC: seller 입장에서 예약자 명단 확인
  const handleGetReservation = useCallback(() => {
    setModalOpen(true);
    if (accessToken && tradePost) {
      dispatch(getReservation({ accessToken, postId: tradePost.postId }))
        .unwrap()
        .then(() => {
          setCandidatesLoading(false);
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
            } else {
              redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                navigate('/'),
              );
            }
          }
        });
    }
  }, [accessToken, tradePost, tradeStatus]);

  // DESC: buyer 입장, 찜하기
  const handleToggleLike = useCallback(() => {
    if (accessToken && tradePost) {
      dispatch(postLike({ accessToken, postId: tradePost.postId }))
        .unwrap()
        .then(() => {
          // setCandidatesLoading(false);
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 404) {
              redirectWithMsg(2, err.response?.data.error, () => navigate(-1));
            } else if (err.response?.status === 403) {
              // TODO: refresh 후 재요청
              redirectWithMsg(2, err.response?.data.error, () =>
                navigate('/login'),
              );
            } else {
              redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                navigate('/'),
              );
            }
          }
        });
    }
  }, [accessToken, tradePost, tradeStatus]);

  const handleSellerGetChat = useCallback(
    (candidate: any) => {
      if (candidate && tradePost) {
        navigate(
          `/chat/messages/${candidate.roomUUID}/${candidate.id}/${tradePost.postId}`,
        );
      }
    },
    [candidates, tradePost],
  );

  const handleBuyerGetChat = useCallback(() => {
    if (accessToken && tradePost) {
      dispatch(getUUID({ accessToken, postId: tradePost.postId }))
        .unwrap()
        .then((res: { roomUUID: string }) => {
          // DESC: 채팅 이동
          navigate(
            `/chat/messages/${res.roomUUID}/${tradePost.seller?.id}/${tradePost.postId}`,
          );
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
  }, [tradePost, accessToken]);

  // 글 수정 🚀🚀🚀
  const [active, setActive] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEditPost, setOpenEditPost] = useState(false);

  const [values, setValues] = useState({
    title: tradePost?.title,
    desc: tradePost?.desc,
    price: tradePost?.price,
  });

  useEffect(() => {
    setValues({
      title: tradePost?.title,
      desc: tradePost?.desc,
      price: tradePost?.price,
    });
  }, [postId, modalOpen, setModalOpen]);

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
    } else if (imgObject.length < 1) {
      toast.warn('이미지는 최소 한 장 이상 등록해야 합니다.');
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
        if (accessToken && imgs && imgs.length === imgObject.length) {
          dispatch(
            updateTradePost({
              postId: tradePost?.postId,
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
      })
      .catch(() => {
        toast.error('이미지 업로드에 실패했습니다.');
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
      if (typeof elem.img === 'string') {
        return elem.img;
      } else {
        return await s3
          .uploadFile(elem.img)
          .then(res => {
            return res.location;
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
    return await Promise.all(promises);
  };

  const handleDeletePost = useCallback(() => {
    if (accessToken && tradePost) {
      dispatch(deleteTradePost({ accessToken, postId: tradePost.postId }))
        .unwrap()
        .then(() => {
          setOpenDelete(false);
          navigate(`/market`);
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
  }, [accessToken]);

  const handleOpenModal = () => {
    if (accessToken && postId) {
      dispatch(getTradePost({ accessToken, postId }))
        .unwrap()
        .then(res => {
          setOpenEditPost(true);
          setValues({
            title: res?.title,
            desc: res?.desc,
            price: res?.price,
          });
          setImgObject(
            res?.imageUrls.map((url: any, index: number) => {
              return {
                id: index,
                img: url,
              };
            }),
          );
        })
        .catch(() => {
          setOpenEditPost(false);
        });
    }
  };

  const handleCloseModal = useCallback(() => {
    setOpenEditPost(false);
    setValues({
      title: tradePost?.title,
      desc: tradePost?.desc,
      price: tradePost?.price,
    });

    setImgObject(
      imageUrls.map((url: any, index: number) => {
        return {
          id: index,
          img: url,
        };
      }),
    );
  }, [imageUrls, tradePost]);

  // 사진
  const [imgObject, setImgObject] = useState<any[]>(
    imageUrls.map((url: any, index: number) => {
      return {
        id: index,
        img: url,
      };
    }),
  );

  return (
    <>
      <S.Wrapper>
        <S.OptionWrapper>
          <S.TradeStatus tradeStatus={tradeStatus}>
            {getTradeStatusKo(tradeStatus)}
          </S.TradeStatus>
          <S.ChatWrapper>
            {tradePost?.isOwner ? (
              <S.Edit
                onClick={() => {
                  if (active) setActive(false);
                  else setActive(true);
                }}
              >
                <S.EditIcon src={editPost} alt="edit" />
                <S.Dropdown
                  initial={active ? 'open' : 'close'}
                  animate={active ? 'open' : 'close'}
                  variants={{
                    open: { height: 'auto' },
                    close: { height: 0 },
                  }}
                >
                  <S.ElemWrapper>
                    <S.Elem onClick={handleOpenModal}>게시글 수정</S.Elem>
                    <S.Elem onClick={() => setOpenDelete(true)}>
                      <S.Delete>게시글 삭제</S.Delete>
                    </S.Elem>
                  </S.ElemWrapper>
                </S.Dropdown>
              </S.Edit>
            ) : (
              <S.Like onClick={handleToggleLike}>
                <S.LikeIcon src={likeIcon} alt="like"></S.LikeIcon>
              </S.Like>
            )}
            {tradePost?.isOwner ? (
              <Button
                bgColor="#ff6f0f"
                handleClick={handleGetReservation}
                text={`대화 중인 채팅방 (${tradePost?.reservationCount})`}
              />
            ) : (
              <Button
                bgColor="#ff6f0f"
                handleClick={handleBuyerGetChat}
                text={'채팅하기'}
              />
            )}
          </S.ChatWrapper>
        </S.OptionWrapper>

        <S.Content onClick={() => setActive(false)}>
          <S.TitleWrapper>
            <S.Title>{tradePost?.title}</S.Title>
          </S.TitleWrapper>

          <S.Price>
            <S.PriceImg src={price} alt="price" />
            {`${toStringNumWithComma(tradePost?.price)}원`}
            <S.Date>{` ∙ ${moment(tradePost?.modifiedAt).fromNow()}`}</S.Date>
          </S.Price>

          <S.Desc>{tradePost?.desc}</S.Desc>

          <S.DetailInfo>
            <S.DetailText>{`관심 ${tradePost?.likeCount}`}</S.DetailText>
            <S.DetailText>{`∙ 채팅 ${tradePost?.reservationCount}`}</S.DetailText>
            <S.DetailText>{`∙ 조회 ${tradePost?.viewCount}`}</S.DetailText>
          </S.DetailInfo>
        </S.Content>
      </S.Wrapper>

      {modalOpen && (
        <ModalWrapper handleClose={() => setModalOpen(false)}>
          {!candidatesLoading ? (
            <>
              <S.Header>채팅목록</S.Header>
              {!buyer && candidates.length <= 0 && (
                <S.DefaultAnnounce>
                  🥕 현재 진행 중인 채팅이 없습니다.
                </S.DefaultAnnounce>
              )}
              {buyer && (
                <Candidate
                  isBuyer={true}
                  key={buyer?.id}
                  animation={true}
                  status={tradeStatus}
                  imgUrl={buyer?.imgUrl}
                  username={buyer?.username}
                  handleChatStart={() => handleSellerGetChat(buyer)}
                />
              )}
              <ul>
                {candidates &&
                  candidates?.map((candidate: any) => {
                    if (buyer?.id !== candidate.id) {
                      return (
                        <Candidate
                          isBuyer={false}
                          animation={false}
                          key={candidate.id}
                          status={tradeStatus}
                          imgUrl={candidate?.imgUrl}
                          username={candidate?.username}
                          handleChatStart={() => handleSellerGetChat(candidate)}
                        />
                      );
                    }
                  })}
              </ul>
            </>
          ) : (
            <>TODO: 로딩중 스켈레톤 넣기</>
          )}
        </ModalWrapper>
      )}

      {openEditPost && (
        <TradePostUpdate
          imgObject={imgObject}
          setImgObject={setImgObject}
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmitEdit}
          handleClose={handleCloseModal}
        />
      )}

      {openDelete && (
        <ModalWrapper handleClose={() => setOpenDelete(false)}>
          <S.DeleteWrapper>
            <S.DeleteTitle> 🥕 정말 삭제하시겠습니까?</S.DeleteTitle>
            <S.DeleteSubtitle>삭제 시 복구할 수 없습니다.</S.DeleteSubtitle>
            <S.ButtonWrapper>
              <S.Cancel onClick={() => setOpenDelete(false)}>취소</S.Cancel>
              <S.Cancel onClick={handleDeletePost}>삭제</S.Cancel>
            </S.ButtonWrapper>
          </S.DeleteWrapper>
        </ModalWrapper>
      )}
    </>
  );
};

export default Description;
