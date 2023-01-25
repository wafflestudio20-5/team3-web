import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './other-trades.styled';
import ShortCut from '../../components/shortcut';
import { getTradePostList } from '../../../../store/slices/marketSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

const OtherTrades = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const [trades, setTrades] = useState<any[]>([]);

  // TODO: 응답으로 처리하기
  useEffect(() => {
    if (accessToken) {
      dispatch(
        getTradePostList({
          accessToken: accessToken,
          keyword: '',
          page: 3,
          limit: 20,
        }),
      )
        .unwrap()
        .then((res: any) => {
          setTrades(res.posts.slice(17, 20));
        });
    }
  }, [accessToken]);

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>지금 주목할 인기중고</S.Title>
        <S.More onClick={() => navigate('/market')}>더 구경하기</S.More>
      </S.TitleWrapper>
      <S.TradesWrapper>
        {trades.map(trade => {
          return <ShortCut key={trade.id} tradeData={trade} />;
        })}
      </S.TradesWrapper>
    </S.Wrapper>
  );
};

export default OtherTrades;
