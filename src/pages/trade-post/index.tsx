import Gnb from '../../components/gnb';
import TradeInfo from './container/trade-info';
import OtherTrades from './container/other-trades';

import * as S from './trade-post.styled';

const TradePostPage = () => {
  // const accessToken = useAppSelector(state => state.accessToken);
  // TODO: 없을 때 이전 페이지로

  return (
    <S.Wrapper>
      <Gnb />
      <S.ContentWrapper>
        {/* TODO: 캐러샐 슬라이더 구현 */}
        <S.SampleImg
          src="https://dnvefa72aowie.cloudfront.net/origin/article/202008/2F22EE23018C3A490E6C3596917934B9B2C80A2958862C4BE49A54BE0AFA6953.jpg?q=95&s=1440x1440&t=inside"
          alt="img"
        />
        <TradeInfo />
        <OtherTrades />
      </S.ContentWrapper>
      {/* footer */}
    </S.Wrapper>
  );
};

export default TradePostPage;
