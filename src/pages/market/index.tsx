import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import ReactS3Client from 'react-aws-s3-typescript';
import { useNavigate } from 'react-router';
import axios from 'axios';

import { toast } from 'react-toastify';
import Spinner from '../../components/spinner';
import Gnb from '../../components/gnb';
import ShortCut from './components/shortcut';
import AddButton from './components/add-button';
import SearchBar from './components/search-bar';
import Pagination from './components/pagination';
import TradePostCreate from '../../components/trade-post-create';

import { getTradePostList } from '../../store/slices/marketSlice';
import { createTradePost } from '../../store/slices/tradePostSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useAuth } from '../../hooks/useAuth';

import { normalToast } from '../../utils/basic-toast-modal';
import { redirectWithMsg } from '../../utils/errors';
import { TradePostType } from '../../types/tradePost';
import { shortenLocation, getDong } from '../../utils/location';

import { Wrapper, Header, Filter, CheckBox, Span, List } from './market.styled';
import defaultImg from '../../assets/default-trade-img.svg';
import { loadItem } from '../../utils/storage';

const MarketPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const { me } = useAppSelector(state => state.users);
  const [isLoading, setIsLoading] = useState(true);
  const [dong, setDong] = useState<string>('내 동네');
  const [keyword, setKeyword] = useState<string>('');
  const [data, setData] = useState<TradePostType[]>([]);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [isTrading, setIsTrading] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const checkBoxChange = async ({ target }: any) => {
    target.checked ? setIsTrading(true) : setIsTrading(false);
  };

  // DESC: 중고거래 글쓰기
  const [imgObject, setImgObject] = useState<any>([]);
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

  const handleCloseModal = useCallback(() => {
    setOpenCreatePost(false);
    setValues({
      title: '',
      desc: '',
      price: '',
    });
    setImgObject([]);
  }, []);

  const uploadImage = async () => {
    const s3Config = {
      bucketName: process.env.REACT_APP_AWS_BUCKET_NAME || '',
      region: process.env.REACT_APP_AWS_REGION || '',
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY || '',
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY || '',
    };
    const s3 = new ReactS3Client(s3Config);

    const promises = imgObject.map(async (elem: { img: File | string }) => {
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

  const handleSubmitCreate = async () => {
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
    }

    uploadImage()
      .then(imgs => {
        if (accessToken) {
          dispatch(
            createTradePost({
              accessToken,
              values,
              imgs,
            }),
          )
            .unwrap()
            .then(res => {
              setOpenCreatePost(false);
              navigate(`/tradepost/${res.postId}`);
              toast.success('성공적으로 등록되었습니다.');
              setValues({
                title: '',
                desc: '',
                price: '',
              });
              setImgObject([]);
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

  const changePage = (page: number) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getFirstList = () => {
    setIsLoading(true);
    if (accessToken) {
      dispatch(
        getTradePostList({
          accessToken: accessToken,
          keyword: keyword,
          page: page,
          limit: 20,
          isTrading: false,
        }),
      )
        .unwrap()
        .then(res => {
          setData(res.posts);
          setTotalPage(Math.ceil(res.paging.total / res.paging.limit));
          setIsLoading(false);
          setIsFirst(false);
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
    getFirstList();
  }, [accessToken, page]);

  const searchHandler = () => {
    setIsLoading(true);
    if (accessToken) {
      dispatch(
        getTradePostList({
          accessToken: accessToken,
          keyword: keyword,
          page: page,
          limit: 20,
          isTrading: isTrading,
        }),
      )
        .unwrap()
        .then(res => {
          setData(res.posts);
          setPage(1);
          setTotalPage(Math.ceil(res.paging.total / res.paging.limit));
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
  };

  useEffect(() => {
    if (!isFirst) {
      const timer = setTimeout(() => {
        searchHandler();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [accessToken, keyword, isTrading]);

  useEffect(() => {
    if (me) {
      setDong(getDong(me.location) as string);
    }
  }, [me, accessToken]);
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
      {accessToken && (
        <Wrapper>
          <Header>
            <Filter>
              <CheckBox type="checkbox" onChange={checkBoxChange} />
              <Span>거래완료 상품 제외</Span>
            </Filter>
            <SearchBar
              keyword={keyword}
              setKeyword={setKeyword}
              searchClick={searchHandler}
              dong={dong}
            />
          </Header>
          {isLoading && <Spinner />}
          {!isLoading && (
            <List>
              {data.map(post => {
                return (
                  <ShortCut
                    key={post?.postId}
                    id={post?.postId}
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
            </List>
          )}
          {!isLoading && (
            <Pagination total={totalPage} page={page} setPage={changePage} />
          )}
          <AddButton handleClick={() => setOpenCreatePost(true)} />
        </Wrapper>
      )}

      {openCreatePost && (
        <TradePostCreate
          imgObject={imgObject}
          setImgObject={setImgObject}
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmitCreate}
          handleClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default MarketPage;
