import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import {
  Container,
  Img,
  Info,
  Title,
  PriceBox,
  Price,
  Location,
  Detail,
  Likes,
  Chats,
  Date,
} from './shortcut.styled';
import TradeStatusButton from '../../../../components/trade-status-button';
import { TradeStatusType } from '../../../../types/tradePost';
import { toStringNumWithComma } from '../../../../utils/tradePost';
import alt from '../../../../assets/post-alt.png';

interface ShortCut {
  id: number;
  img: string;
  title: string;
  tradeStatus: string;
  price: number;
  location: string;
  likes: number;
  chats: number;
  created_at: Date;
}

const ShortCut = ({
  id,
  img,
  title,
  tradeStatus,
  price,
  location,
  likes,
  chats,
  created_at,
}: ShortCut) => {
  return (
    <Container>
      <Link to={`/tradepost/${id}`}>
        <Img
          src={img}
          onError={e => ((e.target as HTMLImageElement).src = alt)}
        />
      </Link>
      <Info>
        <Link to={`/tradepost/${id}`}>
          <Title>{title}</Title>
        </Link>
        <PriceBox>
          {tradeStatus !== TradeStatusType.TRADING && (
            <TradeStatusButton tradeStatus={tradeStatus} />
          )}
          <Price>{toStringNumWithComma(price)}원</Price>
        </PriceBox>
        <Location>{location}</Location>
        <Detail>
          <Likes>관심 {likes} · </Likes>
          <Chats>채팅 {chats} · </Chats>
          <Date>
            <Moment fromNow>{created_at}</Moment>
          </Date>
        </Detail>
      </Info>
    </Container>
  );
};

export default ShortCut;
