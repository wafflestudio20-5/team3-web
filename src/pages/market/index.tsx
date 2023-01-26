import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

import { toast } from 'react-toastify';
import Gnb from '../../components/gnb';
import ShortCut from './components/shortcut';
import AddButton from './components/add-button';
import SearchBar from './components/search-bar';
import Pagination from './components/pagination';
import TradePostCreate from '../../components/trade-post-create';

import { getTradePostList } from '../../store/slices/marketSlice';
import { createTradePost } from '../../store/slices/tradePostSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { redirectWithMsg } from '../../utils/errors';
import { TradePostType } from '../../types/tradePost';
import { shortenLocation } from '../../utils/location';
import { TradeStatusType } from '../../types/tradePost';

import { Wrapper, Header, List } from './market.styled';

const MarketPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const [keyword, setKeyword] = useState<string>('');
  const [data, setData] = useState<TradePostType[]>([]);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  // DESC: 중고거래 글쓰기
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const [values, setValues] = useState({
    title: '',
    desc: '',
    price: '',
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

  const handleSubmitCreate = useCallback(() => {
    if (accessToken) {
      dispatch(
        createTradePost({
          accessToken,
          values,
        }),
      )
        .unwrap()
        .then(res => {
          setOpenCreatePost(false);
          navigate(`/tradepost/${res.postId}`);
          setValues({
            title: '',
            desc: '',
            price: '',
          });
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
    } else {
      redirectWithMsg(2, '로그인이 필요합니다', () => navigate('/login'));
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
      {accessToken && (
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
          <AddButton handleClick={() => setOpenCreatePost(true)} />
        </Wrapper>
      )}

      {openCreatePost && (
        <TradePostCreate
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmitCreate}
          handleClose={() => setOpenCreatePost(false)}
        />
      )}
    </>
  );
};

export default MarketPage;
