import { TradePostType } from './tradePost';
import { User } from './users';

export type ChatMessageType = {
  message: string;
  senderId: number;
  createdAt: Date;
  chatId: number;
};

export type SubBodyType = {
  roomUUID: string;
  message: string;
  senderId: number;
  createdAt: Date;
  chatId: number;
};

export type ChatType = {
  roomUUID: string;
  lastChat?: {
    createdAt?: Date;
    message?: string;
    senderId?: number;
  };
  post?: TradePostType;
  createdAt: Date;
  unreadChatCount?: number;
  you?: User;
};

export type ChatUserType = {
  email?: string;
  id?: number;
  imgUrl?: string;
  location?: string;
  roomUUID?: string;
  temperature?: number;
  username?: string;
};
