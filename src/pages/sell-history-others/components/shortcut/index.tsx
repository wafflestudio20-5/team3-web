import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { toStringNumWithComma } from '../../../../utils/tradePost';
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
  More,
} from './shortcut.styled';
import TradeStatusButton from '../../../../components/trade-status-button';
import alt from '../../../../assets/post-alt.png';

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
}: ShortCut) => {
  return (
    <Container>
      <Link to={`/tradepost/${postId}`}>
        <Img
          src={img ? img : alt}
          onError={e => ((e.target as HTMLImageElement).src = alt)}
        />
      </Link>
      <Info>
        <Link to={`/tradepost/${postId}`}>
          <Title>{title}</Title>
        </Link>
        <PriceBox>
          {tradeStatus !== 'TRADING' && (
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
