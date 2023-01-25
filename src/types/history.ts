import { User } from './users';
import { TradeStatusType } from './tradePost';

export type TradeHistory = {
  postId: number;
  title: string;
  desc: string;
  price: number;
  imageUrls: string[];
  seller: User;
  buyer: User | null;
  reservationCount: number;
  tradeStatus: TradeStatusType;
  viewCount: number;
  likeCount: number;
  isLiked: boolean;
  isOwner: boolean;
  createdAt: Date;
  modifiedAt: Date;
};
