import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { normalToast } from '../../utils/basic-toast-modal';
import { useAuth } from '../../hooks/useAuth';
import { loadItem } from '../../utils/storage';
import Spinner from '../../components/spinner';
import Gnb from '../../components/gnb';
import ShortCut from './components/shortcut';
import { getSellHistory } from '../../store/slices/tradeHistorySlice';
import { shortenLocation } from '../../utils/location';
import { TradeHistory } from '../../types/history';
import { redirectWithMsg } from '../../utils/errors';
import * as S from './sell-history-others.styled';
import { BASE_URL } from '../../constant';
import defaultImg from '../../assets/default-trade-img.svg';
import notFound from '../../assets/notFoundSellHistory.svg';

const SellHistoryOthersPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();
  const userId = Number(params.id);
  const accessToken = loadItem('accessToken');
  const { me } = useAppSelector(state => state.users);
  const [data, setData] = useState<TradeHistory[]>([]);
  const [status, setStatus] = useState<string>('TRADING');
  const [username, setUsername] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/users/${userId}`)
      .then(res => {
        setUsername(res.data.username);
      })
      .catch(err => {
        throw err;
      });
    dispatch(
      getSellHistory({
        accessToken: accessToken as string,
        userId: userId,
      }),
    )
      .unwrap()
      .then(res => {
        setData(
          res.posts
            .filter((post: TradeHistory) => {
              return post.tradeStatus === status;
            })
            .reverse(),
        );
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
  }, [accessToken, me, status]);

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
      <S.Wrapper>
        <S.Header>{`${username}님의 판매내역`}</S.Header>
        <S.FilterBox>
          <S.Filter value={status} onChange={e => setStatus(e.target.value)}>
            <S.Option value="TRADING">판매중</S.Option>
            <S.Option value="RESERVATION">예약중</S.Option>
            <S.Option value="COMPLETED">거래완료</S.Option>
          </S.Filter>
        </S.FilterBox>
        {isLoading && <Spinner />}
        {!isLoading && (
          <S.List>
            {data.map(post => {
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
                  created_at={post?.createdAt}
                />
              );
            })}
          </S.List>
        )}
        {!data[0] && <S.NotFound src={notFound} />}
      </S.Wrapper>
    </>
  );
};

export default SellHistoryOthersPage;
