import Gnb from '../../components/gnb';
import TradeInfo from './container/trade-info';
import OtherTrades from './container/other-trades';

import { useAuth } from '../../hooks/useAuth';

import * as S from './trade-post.styled';

const TradePostPage = () => {
  const { sessionLoading } = useAuth();

  if (sessionLoading) {
    return <div>로딩 중...</div>;
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
