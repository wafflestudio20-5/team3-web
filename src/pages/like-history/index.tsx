import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Gnb from '../../components/gnb';
import ShortCut from './components/shortcut';
import { getLikeHistory } from '../../store/slices/tradeHistorySlice';
import { postLike } from '../../store/slices/tradePostSlice';
import { shortenLocation } from '../../utils/location';
import { TradeHistory } from '../../types/history';
import { redirectWithMsg } from '../../utils/errors';
import * as S from './like-history.styled';
import { stringify } from 'querystring';
import { toast } from 'react-toastify';

const LikeHistoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const { me } = useAppSelector(state => state.users);
  const [data, setData] = useState<TradeHistory[]>([]);
  useEffect(() => {
    if (me) {
      dispatch(getLikeHistory(accessToken as string))
        .unwrap()
        .then(res => {
          console.log(res);
          setData(res.posts);
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
  }, [accessToken, me]);

  const handleLike = (postId: number) => {
    dispatch(
      postLike({
        accessToken: accessToken as string,
        postId: postId as number,
      }),
    )
      .unwrap()
      .then(res => {
        console.log(res);
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
  };

  return (
    <>
      <Gnb />
      <S.Wrapper>
        <S.Header>나의 찜 목록</S.Header>
        <S.List>
          {data.map(post => {
            return (
              <ShortCut
                key={post?.postId}
                postId={post?.postId}
                img={post?.imageUrls[0]}
                title={post?.title}
                tradeStatus={post?.tradeStatus}
                price={post?.price}
                location={shortenLocation(post?.seller.location)}
                likes={post?.likeCount}
                chats={post?.reservationCount}
                created_at={post?.createdAt}
                isLiked={post?.isLiked}
                handleLike={handleLike}
              />
            );
          })}
          {!data[0] && <S.Message>찜한 상품이 없습니다</S.Message>}
        </S.List>
      </S.Wrapper>
    </>
  );
};

export default LikeHistoryPage;
