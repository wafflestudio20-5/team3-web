import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import ShortCut from './components/shortcut';
import { Wrapper, Header, List } from './market.styled';
import Gnb from '../../components/gnb';
import AddButton from './components/add-button';
import SearchBar from './components/search-bar';

import { redirectWithMsg } from '../../utils/errors';
import { getTradePostList } from '../../store/slices/marketSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { TradePostType } from '../../types/tradePost';
import { TradeStatusType } from '../../types/tradePost';
import { shortenLocation } from '../../utils/location';
import Pagination from './components/pagination';

const MarketPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const [keyword, setKeyword] = useState<string>('');
  const [data, setData] = useState<TradePostType[]>([]);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const changePage = (page: number) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(
        getTradePostList({
          accessToken: accessToken,
          keyword: keyword,
          page: page,
          limit: 20,
        }),
      )
        .unwrap()
        .then(res => {
          setData(res.posts);
          setTotalPage(Math.ceil(res.paging.total / res.paging.limit));
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
  }, [accessToken, page]);

  const searchHandler = () => {
    if (accessToken) {
      dispatch(
        getTradePostList({
          accessToken: accessToken,
          keyword: keyword,
          page: page,
          limit: 20,
        }),
      )
        .unwrap()
        .then(res => {
          setData(res.posts);
          setPage(1);
          setTotalPage(Math.ceil(res.paging.total / res.paging.limit));
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
  return (
    <>
      <Gnb />
      <Wrapper>
        <Header>
          <SearchBar
            keyword={keyword}
            setKeyword={setKeyword}
            searchClick={searchHandler}
          />
        </Header>
        <List>
          {data.map(post => {
            return (
              <ShortCut
                key={post?.postId}
                id={post?.postId}
                img={post?.imageUrls}
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
        </List>
        <Pagination total={totalPage} page={page} setPage={changePage} />
        <AddButton />
      </Wrapper>
    </>
  );
};

export default MarketPage;
