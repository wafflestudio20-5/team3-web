export type ChatMessageType = {
  message: string;
  senderId: number;
  createdAt: Date;
}

export type SubBodyType = { 
  roomUUID: string;
  message: string;
  senderId: number;
  createdAt: Date;
}