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

interface ShortCut {
  img: string;
  title: string;
  tradeStatus: string;
  price: number;
  location: string;
  likes: number;
  chats: number;
  created_at: string;
}

const ShortCut = ({
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
      <Img src={img} />
      <Info>
        <Title>{title}</Title>
        <PriceBox>
          {tradeStatus !== 'onSale' && (
            <TradeStatusButton tradeStatus={tradeStatus} />
          )}
          <Price>{price}원</Price>
        </PriceBox>
        <Location>{location}</Location>
        <Detail>
          <Likes>관심 {likes} · </Likes>
          <Chats>채팅 {chats} · </Chats>
          <Date>{created_at}</Date>
        </Detail>
      </Info>
    </Container>
  );
};

export default ShortCut;
