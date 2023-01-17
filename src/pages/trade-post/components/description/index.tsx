import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/ko';
import { toast } from 'react-toastify';

import Button from '../button';
import Candidate from '../candidate';
import ModalWrapper from '../../../../components/modal-wrapper';

import {
  getTradeStatusKo,
  toStringNumWithComma,
} from '../../../../utils/tradePost';
import {
  getReservation,
  postConfirmation,
  postLike,
  postReservation,
} from '../../../../store/slices/tradePostSlice';
import { getUUID } from '../../../../store/slices/chatSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

import * as S from './description.styled';
import price from '../../../../assets/price.svg';
import daangn from '../../../../assets/marker.png';
import editPost from '../../../../assets/edit-post.svg';
import likeFill from '../../../../assets/like-fill.svg';
import likeBlank from '../../../../assets/like-blank.svg';
import { redirectWithMsg } from '../../../../utils/errors';

const Description = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [likeIcon, setLikeIcon] = useState(likeBlank);
  const [candidatesLoading, setCandidatesLoading] = useState(false);

  const { accessToken } = useAppSelector(state => state.session);
  const { candidates, tradePost, buyer, tradeStatus, isLiked } = useAppSelector(
    state => state.tradePost,
  );

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

  // DESC: seller 입장, 예약자 선정
  const handleSetReservation = useCallback(
    (candidateId: number) => {
      if (accessToken && tradePost) {
        dispatch(
          postReservation({
            accessToken,
            postId: tradePost.postId,
            userId: candidateId,
          }),
        )
          .unwrap()
          .then(() => {
            // setCandidatesLoading(false);
          })
          .catch(err => {
            if (axios.isAxiosError(err)) {
              if (err.response?.status === 404) {
                redirectWithMsg(2, err.response?.data.error, () =>
                  navigate(-1),
                );
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
    },
    [accessToken, tradePost, tradeStatus],
  );

  // DESC: seller 입장, 예약자 확정 (거래 완료)
  const handleSetConfirmation = useCallback(() => {
    if (accessToken && tradePost) {
      dispatch(postConfirmation({ accessToken, postId: tradePost.postId }))
        .unwrap()
        .then(() => {
          // setCandidatesLoading(false);
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
      if (candidate) {
        navigate(`/chat/messages/${candidate.roomUUID}/${candidate.id}`);
      }
    },
    [candidates],
  );

  const handleBuyerGetChat = useCallback(() => {
    if (accessToken && tradePost) {
      dispatch(getUUID({ accessToken, postId: tradePost.postId }))
        .unwrap()
        .then((res: { roomUUID: string }) => {
          // DESC: 채팅 이동
          navigate(`/chat/messages/${res.roomUUID}/${tradePost.seller?.id}`);
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

  return (
    <>
      <S.Wrapper>
        <S.OptionWrapper>
          <S.TradeStatus>{getTradeStatusKo(tradeStatus)}</S.TradeStatus>
          <S.ChatWrapper>
            {tradePost?.isOwner ? (
              <S.Edit>
                <S.EditIcon src={editPost} alt="edit"></S.EditIcon>
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

        <S.TitleWrapper>
          <S.Title>{tradePost?.title}</S.Title>
          <S.TitleImg src={daangn} alt="logo" />
          <S.Date>{`∙ ${moment(tradePost?.modifiedAt).fromNow()}`}</S.Date>
        </S.TitleWrapper>

        <S.Price>
          <S.PriceImg src={price} alt="price" />
          {`${toStringNumWithComma(tradePost?.price)}원`}
        </S.Price>

        <S.Desc>{tradePost?.desc}</S.Desc>

        <S.DetailInfo>
          <S.DetailText>{`관심 ${tradePost?.likeCount}`}</S.DetailText>
          <S.DetailText>{`∙ 채팅 ${tradePost?.reservationCount}`}</S.DetailText>
          <S.DetailText>{`∙ 조회 ${tradePost?.viewCount}`}</S.DetailText>
        </S.DetailInfo>
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
                  handleSetReservation={handleSetConfirmation}
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
                          handleSetReservation={() =>
                            handleSetReservation(candidate?.id)
                          }
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
    </>
  );
};

export default Description;
