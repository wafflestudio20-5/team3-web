import axios from 'axios';
import { axiosI } from '../../api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { auth } from '../../api';
import { BASE_URL } from '../../constant';
import { User } from '../../types/users';

export const getUUID = createAsyncThunk(
  'chat/getUUID',
  async (
    { accessToken, postId }: { accessToken: string; postId: number },
    { rejectWithValue },
  ) => {
    try {
      const res = await axiosI.get(`/chat/room/${postId}`, {
        headers: auth(accessToken),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getChats = createAsyncThunk(
  'chat/getChats',
  async (
    {
      uid,
      isBuyer,
      roomUUID,
      accessToken,
    }: { accessToken: string; roomUUID: string; uid: number; isBuyer: boolean },
    { rejectWithValue },
  ) => {
    try {
      const res = await axiosI.get(
        `/chat/messages/${roomUUID}/${uid}?buyer=${isBuyer}`,
        {
          headers: auth(accessToken),
        },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getMyChats = createAsyncThunk(
  'chat/getMyChats',
  async (token: string, { rejectWithValue }) => {
    try {
      const res = await axiosI.get(`/users/chats`, {
        headers: auth(token),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

interface chatSliceState {
  roomUUID: string | null;
  you: User | null | any; // TODO: dependency 걸려있는 곳 찾아서 삭제
  myChats: any; // TODO: 채팅 정보 확정시
  unreadTotalCount: number;
}
const initialState: chatSliceState = {
  roomUUID: null,
  you: null,
  myChats: null,
  unreadTotalCount: 0,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUUID.fulfilled, (state, action) => {
      state.roomUUID = action.payload.roomUUID;
    });
    builder.addCase(getChats.fulfilled, (state, action) => {
      state.you = action.payload.you;
    });
    builder.addCase(getMyChats.fulfilled, (state, action) => {
      state.unreadTotalCount = action.payload.unreadTotalCount;
      state.myChats = action.payload.chats
        ?.sort((chat1: any, chat2: any) => {
          if (chat1.lastChat && chat2.lastChat) {
            return (
              new Date(chat1.lastChat.createdAt).getTime() -
              new Date(chat2.lastChat.createdAt).getTime()
            );
          }
        })
        .reverse();
    });
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
