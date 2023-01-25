import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import * as S from './shortcut.styled';
import alt from '../../../../assets/default-others.svg';
import { TradeStatusType } from '../../../../types/tradePost';
import { toStringNumWithComma } from '../../../../utils/tradePost';
import TradeStatusButton from '../../../../components/trade-status-button';

interface ShortCut {
  // TODO: 데이터 내용 파악
  tradeData?: any;
}

const ShortCut = ({ tradeData }: ShortCut) => {
  return (
    <S.Container>
      <Link to={`/tradepost/${tradeData?.id}`}>
        <S.Img src={tradeData?.img || alt} />
      </Link>
      <S.Info>
        <Link to={`/tradepost/${tradeData?.id}`}>
          <S.Title>{tradeData?.title}</S.Title>
        </Link>
        <S.PriceBox>
          {tradeData?.tradeStatus !== TradeStatusType.TRADING && (
            <TradeStatusButton tradeStatus={tradeData?.tradeStatus} />
          )}
          <S.Price>{toStringNumWithComma(tradeData?.price)}원</S.Price>
        </S.PriceBox>
        <S.Location>{tradeData?.seller?.location}</S.Location>
        <S.Detail>
          <S.Likes>관심 {tradeData?.likes} · </S.Likes>
          <S.Chats>채팅 {tradeData?.chats} · </S.Chats>
          <S.Date>
            <Moment fromNow>{tradeData?.created_at}</Moment>
          </S.Date>
        </S.Detail>
      </S.Info>
    </S.Container>
  );
};

export default ShortCut;
