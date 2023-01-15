import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { auth } from '../../api';
import { BASE_URL } from '../../constant';
import { TradePostType, TxUser } from '../../types/tradePost';

// REFACTOR: request, response 타입 정보 따로 저장
export const getTradePost = createAsyncThunk(
  'tradePost/getTradePost',
  async (
    { accessToken, postId }: { accessToken: string; postId: number },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.get<TradePostType>(
        `${BASE_URL}/tradepost/${postId}`,
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

export const postTradePost = createAsyncThunk(
  'tradePost/postTradePost',
  async (
    {
      accessToken,
      title,
      desc,
      price,
    }: { accessToken: string; title: string; desc: string; price: string },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.post<TradePostType>(
        `${BASE_URL}/tradepost`,
        { title, desc, price },
        { headers: auth(accessToken) },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const updateTradePost = createAsyncThunk(
  'tradePost/updateTradePost',
  async (
    {
      postId,
      accessToken,
      title,
      desc,
      price,
    }: {
      postId: number;
      accessToken: string;
      title: string | null;
      desc: string | null;
      price: string | null;
    },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.patch<TradePostType>(
        `${BASE_URL}/tradepost/${postId}`,
        { title, desc, price },
        { headers: auth(accessToken) },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const deleteTradePost = createAsyncThunk(
  'tradePost/deleteTradePost',
  async (
    { accessToken, postId }: { accessToken: string; postId: number },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.delete(`${BASE_URL}/tradepost/${postId}`, {
        headers: auth(accessToken),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const postLike = createAsyncThunk(
  'tradePost/postLike',
  async (
    { accessToken, postId }: { accessToken: string; postId: number },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/tradepost/${postId}/like`,
        {},
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

export const getReservation = createAsyncThunk(
  'tradePost/getReservation',
  async (
    { accessToken, postId }: { accessToken: string; postId: number },
    { rejectWithValue },
  ) => {
    try {
      // TODO: 타입 수정
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = await axios.get<any>(
        `${BASE_URL}/tradepost/${postId}/reservation`,
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

export const postReservation = createAsyncThunk(
  'tradePost/postReservation',
  async (
    {
      accessToken,
      postId,
      userId,
    }: { accessToken: string; postId: number; userId: number },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/tradepost/${postId}/reservation/${userId}`,
        {},
        { headers: auth(accessToken) },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const postConfirmation = createAsyncThunk(
  'tradePost/postConfirmation',
  async (
    { accessToken, postId }: { accessToken: string; postId: number },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/tradepost/${postId}/confirmation`,
        {},
        { headers: auth(accessToken) },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

interface tradePostSliceState {
  seller: TxUser | null;
  buyer: TxUser | null;
  tradePost: TradePostType | null;
  candidates: any;
  tradeStatus: any;
  isLiked: boolean;
}
const initialState: tradePostSliceState = {
  seller: null,
  buyer: null,
  tradePost: null,
  candidates: [],
  tradeStatus: null,
  isLiked: false,
};

export const tradePostSlice = createSlice({
  name: 'tradePost',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTradePost.fulfilled, (state, action) => {
      state.isLiked = action.payload.isLiked as boolean;
      state.seller = action.payload.seller as TxUser;
      state.buyer = action.payload.buyer as TxUser;
      state.tradePost = action.payload as TradePostType;
      state.tradeStatus = action.payload.tradeStatus as any;
    });
    builder.addCase(getReservation.fulfilled, (state, action) => {
      console.log(action.payload);
      console.log(action.payload);
      state.buyer = action.payload.buyer as TxUser;
      state.candidates = action.payload.candidates as any;
      state.tradeStatus = action.payload.tradeStatus as any;
    });
    builder.addCase(postReservation.fulfilled, (state, action) => {
      state.buyer = action.payload.buyer as TxUser;
      state.candidates = action.payload.candidates as any;
      state.tradeStatus = action.payload.tradeStatus as any;
    });
    builder.addCase(postConfirmation.fulfilled, (state, action) => {
      state.buyer = action.payload.buyer as TxUser;
      state.candidates = action.payload.candidates as any;
      state.tradeStatus = action.payload.tradeStatus as any;
    });
    builder.addCase(postLike.fulfilled, state => {
      state.isLiked = !state.isLiked;
    });
  },
});

export const tradePostActions = tradePostSlice.actions;
export default tradePostSlice.reducer;
