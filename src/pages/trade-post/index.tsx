import Gnb from '../../components/gnb';
import TradeInfo from './container/trade-info';
import OtherTrades from './container/other-trades';

import * as S from './trade-post.styled';

const TradePostPage = () => {
  return (
    <S.Wrapper>
      <Gnb />
      <S.ContentWrapper>
        <TradeInfo />
        {/* 슬라이더 */}
        <OtherTrades />
      </S.ContentWrapper>
      {/* footer */}
    </S.Wrapper>
  );
};

export default TradePostPage;
