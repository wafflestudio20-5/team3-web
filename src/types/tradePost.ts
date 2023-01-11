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
  seller: TxUser | null;
  buyer: TxUser | null;
  createdAt: Date;
  modifiedAt: Date;
  reservationCount: number;
  tradeStatus: TradeStatusType;
  viewCount: number;

  // 🥕 later...
  otherPosts: any;
  imgUrls?: any;
};

export type TxUser = {
  id: number;
  email: string;
  username: string;
  location: string;
  temperature: number;
  imgUrl: string | null;
};
