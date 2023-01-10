import { Dispatch, SetStateAction } from 'react';

export type User = {
  id: number;
  username: string;
  email: string;
  location: string;
  temperature: number;
  imgUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export type EditType = {
  img: boolean;
  username: boolean;
  password: boolean;
  location: boolean;
};

export type SetEditType = Dispatch<SetStateAction<EditType>>;
