import { useNavigate } from 'react-router-dom';

import Gnb from '../../components/gnb';
import Spinner from '../../components/spinner';
import TradeInfo from './container/trade-info';
import OtherTrades from './container/other-trades';
import ContentFooter from '../../components/content-footer';

import { useAuth } from '../../hooks/useAuth';
import { normalToast } from '../../utils/basic-toast-modal';

import * as S from './trade-post.styled';

const TradePostPage = () => {
  const navigate = useNavigate();
  const { sessionLoading, isAuthed } = useAuth();

  if (!sessionLoading && !isAuthed) {
    navigate('/login');
    normalToast('로그인이 필요합니다.');
  }

  if (sessionLoading || !isAuthed) {
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
