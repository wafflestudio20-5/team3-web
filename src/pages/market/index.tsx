import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import ShortCut from './components/shortcut';
import { Wrapper, Header, Intro, List } from './market.styled';
import Gnb from '../../components/gnb';
import AddButton from './components/add-button';
import SearchBar from './components/search-bar';
import carrot from '../../assets/carrot.svg';
import sample from '../../assets/product-sample.jpeg';
import sample2 from '../../assets/product-sample-2.jpeg';
import sample3 from '../../assets/product-sample-3.jpeg';
import sample4 from '../../assets/product-sample-4.jpeg';
import sample5 from '../../assets/product-sample-5.jpeg';
import sample6 from '../../assets/product-sample-6.jpeg';

import { redirectWithMsg } from '../../utils/errors';
import { getTradePostList } from '../../store/slices/marketSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { TradePostList } from '../../types/market';
import { TradeStatusType } from '../../types/tradePost';
import Pagination from './components/pagination';

const MarketPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const [keyword, setKeyword] = useState<string>('');
  const initialList: TradePostList = [
    {
      postId: 0,
      title: '',
      desc: '',
      price: 0,
      likeCount: 0,
      isLiked: false,
      isOwner: false,
      seller: {
        id: 0,
        email: 'a1929@n.com',
        username: 'asdfesnv',
        imgUrl: '',
        location: '',
        temperature: 1,
        roomUUID: '',
      },
      buyer: null,
      createdAt: new Date(),
      modifiedAt: new Date(),
      reservationCount: 0,
      tradeStatus: TradeStatusType['TRADING'],
      viewCount: 0,
      otherPosts: null,
      imageUrls: '',
    },
  ];
  const [data, setData] = useState<TradePostList>(initialList);
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
                img={post?.imageUrls}
                title={post?.title}
                tradeStatus={post?.tradeStatus}
                price={post?.price}
                location={post?.seller.location}
                likes={post?.likeCount}
                chats={post?.reservationCount}
                created_at={post?.createdAt}
              />
            );
          })}
          {/* {data && (
            <ShortCut
              img={data[0]?.imageUrls}
              title={data[0]?.title}
              tradeStatus={data[0]?.tradeStatus}
              price={data[0]?.price}
              location={data[0]?.seller.location}
              likes={data[0]?.likeCount}
              chats={data[0]?.reservationCount}
              created_at={data[0]?.modifiedAt}
            />
          )} */}
          {/* <ShortCut
            img={sample6}
            title={'당근 팔아요'}
            tradeStatus="TRADING"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample5}
            title={'당근 팔아요 맛이 정말 좋아요 직접 키웠어요'}
            tradeStatus="TRADING"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample2}
            title={'아이폰 13프로 미개봉 새상품 팝니다(네고안됨)'}
            tradeStatus="RESERVATION"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample}
            title={'패딩 팝니다 3년 입었어요'}
            tradeStatus="TRADING"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample3}
            title={'와플 기계 팝니다 거의 새거입니다'}
            tradeStatus="COMPLETED"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample4}
            title={'당근 팔아요'}
            tradeStatus="RESERVATION"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample5}
            title={'당근 팔아요'}
            tradeStatus="TRADING"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={sample6}
            title={'당근와플 중고제품 팔아요 맛있어요 한 입만 먹었어요'}
            tradeStatus="TRADING"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          />
          <ShortCut
            img={carrot}
            title={'당근 팔아요'}
            tradeStatus="TRADING"
            price={4000}
            location={'관악구 행운동'}
            likes={5}
            chats={2}
            created_at={'1일 전'}
          /> */}
        </List>
        <Pagination total={totalPage} page={page} setPage={changePage} />
        <AddButton />
      </Wrapper>
    </>
  );
};

export default MarketPage;
