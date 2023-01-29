export type ChatMessageType = {
  message: string;
  senderId: number;
  createdAt: Date;
  chatId: number;
}

export type SubBodyType = { 
  roomUUID: string;
  message: string;
  senderId: number;
  createdAt: Date;
  chatId: number;
}
