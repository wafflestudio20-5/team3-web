import Gnb from '../../components/gnb';
import TradeInfo from './container/trade-info';
import OtherTrades from './container/other-trades';

import { useAuth } from '../../hooks/useAuth';

import * as S from './trade-post.styled';

const TradePostPage = () => {
  const { sessionLoading } = useAuth();

  // DESC: session (로그인 여부, 유효한 토큰)에 따른 로딩 컴포넌트
  // TODO: 컴포넌트 만들기
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
