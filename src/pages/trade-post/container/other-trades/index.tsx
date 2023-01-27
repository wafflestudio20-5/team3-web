import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './other-trades.styled';
import ShortCut from '../../components/shortcut';
import { getTop3 } from '../../../../store/slices/tradePostSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

const OtherTrades = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector(state => state.session);
  const [trades, setTrades] = useState<any[]>([]);

  // TODO: 응답으로 처리하기
  useEffect(() => {
    if (accessToken) {
      dispatch(getTop3({ accessToken }))
        .unwrap()
        .then((res: any) => {
          setTrades(res.posts);
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
          return <ShortCut key={trade.postId} tradeData={trade} />;
        })}
      </S.TradesWrapper>
    </S.Wrapper>
  );
};

export default OtherTrades;
