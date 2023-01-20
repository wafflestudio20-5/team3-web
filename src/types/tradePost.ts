/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: 백엔드와 타입 합의 후 타입정보 수정

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
  // 수정: seller가 null일 수 있나요? 타입 에러때문에 일단 수정좀 할게요..!
  seller: TxUser;
  buyer: TxUser | null;
  createdAt: Date;
  modifiedAt: Date;
  reservationCount: number;
  tradeStatus: TradeStatusType;
  viewCount: number;

  // 🥕 later...
  otherPosts: any;
  imageUrls?: any;
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
