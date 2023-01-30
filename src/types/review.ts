interface User {
  id: number;
  imgUrl: string;
  location: string;
  temperature: number;
  username: string;
}

export enum BuySellType {
  BUYER = 'BUYER',
  SELLER = 'SELLER',
}

export type Review = {
  id: number;
  user: User;
  createdAt: Date;
  content: string;
  type: BuySellType;
};

export type ReviewHistory = {
  id: number;
  type: BuySellType;
  createdAt: Date;
  content: string;
};
