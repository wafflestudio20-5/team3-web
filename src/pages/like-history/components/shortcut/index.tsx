import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import {
  Container,
  Img,
  Heart,
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
import alt from '../../../../assets/post-alt.png';
import heart from '../../../../assets/heart.svg';
import likeFill from '../../../../assets/like-fill.svg';
import likeBlank from '../../../../assets/like-blank.svg';

interface ShortCut {
  postId: number;
  img: string;
  title: string;
  tradeStatus: string;
  price: number;
  location: string;
  likes: number;
  chats: number;
  created_at: Date;
  isLiked: boolean;
  handleLike: (postId: number) => void;
}

const ShortCut = ({
  postId,
  img,
  title,
  tradeStatus,
  price,
  location,
  likes,
  chats,
  created_at,
  isLiked,
  handleLike,
}: ShortCut) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState<boolean>(isLiked);
  const clickLike = () => {
    handleLike(postId);
    setLiked(prev => !prev);
  };

  return (
    <Container>
      <Link to={`/tradepost/${postId}`}>
        <Img
          src={img ? img : alt}
          onError={e => ((e.target as HTMLImageElement).src = alt)}
        />
      </Link>
      <Heart src={liked ? likeFill : likeBlank} onClick={clickLike} />
      <Info>
        <Link to={`/tradepost/${postId}`}>
          <Title>{title}</Title>
        </Link>
        <PriceBox>
          {tradeStatus !== 'TRADING' && (
            <TradeStatusButton tradeStatus={tradeStatus} />
          )}
          <Price>{price}원</Price>
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
