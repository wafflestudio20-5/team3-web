/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: 백엔드와 타입 합의 후 타입정보 수정

import { ReviewHistory } from './review';

export enum TradeStatusType {
  TRADING = 'TRADING',
  RESERVATION = 'RESERVATION',
  COMPLETED = 'COMPLETED',
}

export type TradePostType = {
  postId: number;
  title: string;
  desc: string;
  price: number;
  likeCount: number;
  isLiked: boolean;
  isOwner: boolean;
  seller: TxUser;
  buyer: TxUser | null;
  createdAt: Date;
  modifiedAt: Date;
  reservationCount: number;
  tradeStatus: TradeStatusType;
  viewCount: number;

  // 🥕 later...
  otherPosts: any;
  imageUrls: string[] | any; // TODO: dependency 때문에 확인하고 any 제거
  reviews: ReviewHistory[];
};

export type TxUser = {
  id: number;
  email: string;
  username: string;
  location: string;
  temperature: number;
  imgUrl: string | null;
  roomUUID: string;
};
