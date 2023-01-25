import { TradePostType } from './tradePost';

export type Paging = {
  limit: number;
  offset: number;
  total: number;
  count: number;
  hasNext: boolean;
};
export type TradePostResponse = {
  paging: Paging;
  posts: [TradePostType];
};

export type TradePostList = [TradePostType];
