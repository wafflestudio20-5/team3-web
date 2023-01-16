import Gnb from '../../components/gnb';
import Spinner from '../../components/spinner';
import TradeInfo from './container/trade-info';
import OtherTrades from './container/other-trades';

import { useAuth } from '../../hooks/useAuth';

import * as S from './trade-post.styled';

const TradePostPage = () => {
  const { sessionLoading } = useAuth();

  if (sessionLoading) {
    return <Spinner />;
  }

  return (
    <S.Wrapper>
      <Gnb />
      <S.ContentWrapper>
        <TradeInfo />
        <OtherTrades />
      </S.ContentWrapper>
      {/* footer */}
    </S.Wrapper>
  );
};

export default TradePostPage;
