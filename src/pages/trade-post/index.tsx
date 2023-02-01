import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Gnb from '../../components/gnb';
import Spinner from '../../components/spinner';
import TradeInfo from './container/trade-info';
import OtherTrades from './container/other-trades';
import ContentFooter from '../../components/content-footer';

import { useAuth } from '../../hooks/useAuth';
import { loadItem } from '../../utils/storage';
import { useAppDispatch } from '../../store/hooks';
import { normalToast } from '../../utils/basic-toast-modal';
import { getTradePost } from '../../store/slices/tradePostSlice';

import * as S from './trade-post.styled';

const TradePostPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const postId = Number(useParams().id);
  const [dataLoading, setDataLoading] = useState(true);
  const { sessionLoading, isAuthed } = useAuth();
  const accessToken = loadItem('accessToken');

  useEffect(() => {
    if (accessToken && postId) {
      dispatch(getTradePost({ accessToken, postId }))
        .unwrap()
        .then(() => {
          setDataLoading(false);
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 404) {
              normalToast(err.response?.data.error);
            } else {
              normalToast('요청을 수행할 수 없습니다.');
              navigate(-1);
            }
          }
        });
    }
  }, [accessToken, postId]);

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!sessionLoading && !isAuthed) {
    navigate('/login');
    normalToast('로그인이 필요합니다.');
  }

  if (sessionLoading || !isAuthed) {
    return <Spinner />;
  }

  if (dataLoading) {
    return <Spinner />;
  }

  return (
    <S.Wrapper>
      <Gnb isColored />
      <S.ContentWrapper>
        <TradeInfo />
        <OtherTrades />
      </S.ContentWrapper>
      <ContentFooter />
    </S.Wrapper>
  );
};

export default TradePostPage;
