import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { normalToast } from '../../utils/basic-toast-modal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useAuth } from '../../hooks/useAuth';
import { loadItem } from '../../utils/storage';
import Spinner from '../../components/spinner';
import Gnb from '../../components/gnb';
import ContentFooter from '../../components/content-footer';
import ShortCut from './components/shortcut';
import { getBuyHistory } from '../../store/slices/tradeHistorySlice';
import { shortenLocation, UTCtoKST } from '../../utils/location';
import { TradeHistory } from '../../types/history';
import { redirectWithMsg } from '../../utils/errors';
import * as S from './buy-history.styled';
import defaultImg from '../../assets/default-trade-img.svg';
import notFound from '../../assets/notFoundBuyHistory.svg';

const BuyHistoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accessToken = loadItem('accessToken');
  const { me } = useAppSelector(state => state.users);
  const [data, setData] = useState<TradeHistory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    if (me) {
      dispatch(getBuyHistory(accessToken as string))
        .unwrap()
        .then(res => {
          setData(res.posts.reverse());
          setIsLoading(false);
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

  const { sessionLoading, isAuthed } = useAuth();

  if (!sessionLoading && !isAuthed) {
    navigate('/login');
    normalToast('로그인이 필요합니다.');
  }

  if (sessionLoading || !isAuthed) {
    return <Spinner />;
  }

  return (
    <>
      <Gnb />
      <S.Header>나의 구매내역</S.Header>
      {isLoading && <Spinner />}
      {!isLoading && (
        <S.Wrapper>
          {data[0] && (
            <S.List>
              {data?.map(post => {
                return (
                  <ShortCut
                    key={post?.postId}
                    postId={post?.postId}
                    img={post?.imageUrls[0] ? post?.imageUrls[0] : defaultImg}
                    title={post?.title}
                    tradeStatus={post?.tradeStatus}
                    price={post?.price}
                    location={shortenLocation(post?.seller.location)}
                    likes={post?.likeCount}
                    chats={post?.reservationCount}
                    created_at={UTCtoKST(post?.createdAt)}
                    reviews={post?.reviews}
                    seller={post?.seller}
                    buyer={post?.buyer}
                  />
                );
              })}
            </S.List>
          )}
          {!data[0] && <S.NotFound src={notFound} />}
        </S.Wrapper>
      )}
    </>
  );
};

export default BuyHistoryPage;
