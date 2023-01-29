import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Gnb from '../../components/gnb';
import ShortCut from './components/shortcut';
import { getSellHistory } from '../../store/slices/tradeHistorySlice';
import { postConfirmation } from '../../store/slices/tradePostSlice';
import { shortenLocation } from '../../utils/location';
import { TradeHistory } from '../../types/history';
import { redirectWithMsg } from '../../utils/errors';
import * as S from './sell-history-my.styled';
import defaultImg from '../../assets/default-trade-img.svg';

const SellHistoryMyPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const { me } = useAppSelector(state => state.users);
  const [data, setData] = useState<TradeHistory[]>([]);
  const [status, setStatus] = useState<string>('TRADING');
  const getList = () => {
    if (me) {
      dispatch(
        getSellHistory({
          accessToken: accessToken as string,
          userId: me.id,
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
  };
  useEffect(() => {
    getList();
  }, [accessToken, me, status]);

  return (
    <>
      <Gnb />
      <S.Wrapper>
        <S.Header>나의 판매내역</S.Header>
        <S.FilterBox>
          <S.Filter value={status} onChange={e => setStatus(e.target.value)}>
            <S.Option value="TRADING">판매중</S.Option>
            <S.Option value="RESERVATION">예약중</S.Option>
            <S.Option value="COMPLETED">거래완료</S.Option>
          </S.Filter>
        </S.FilterBox>
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
                desc={post?.desc}
                getList={getList}
              />
            );
          })}
          {!data[0] && <S.Message>판매 내역이 없습니다</S.Message>}
        </S.List>
      </S.Wrapper>
    </>
  );
};

export default SellHistoryMyPage;
