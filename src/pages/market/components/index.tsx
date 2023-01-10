import {
  Container,
  Img,
  Title,
  Price,
  Location,
  Info,
  Likes,
  Chats,
  Date,
} from './shortcut.styled';

interface ShortCut {
  img: string;
  title: string;
  price: number;
  location: string;
  likes: number;
  chats: number;
  created_at: string;
}

const ShortCut = ({
  img,
  title,
  price,
  location,
  likes,
  chats,
  created_at,
}: ShortCut) => {
  return (
    <Container>
      <Img src={img} />
      <Title>{title}</Title>
      <Price>{price}원</Price>
      <Location>{location}</Location>
      <Info>
        <Likes>관심 {likes} · </Likes>
        <Chats>채팅 {chats} · </Chats>
        <Date>{created_at}</Date>
      </Info>
    </Container>
  );
};

export default ShortCut;
