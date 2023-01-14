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
      const res = await axios.post(`${BASE_URL}/tradepost/${postId}/like`, {
        headers: auth(accessToken),
      });
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
        { headers: auth(accessToken) },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const postCancelReservation = createAsyncThunk(
  'tradePost/postCancelReservation',
  async (
    { accessToken, postId }: { accessToken: string; postId: number },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.post(`${BASE_URL}/tradepost/${postId}/cancel`, {
        headers: auth(accessToken),
      });
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
        { headers: auth(accessToken) },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// DESC: slice 초기값과 타입
interface tradePostSliceState {
  seller: TxUser | null;
  buyer: TxUser | null;
  tradePost: TradePostType | null;
}
const initialState: tradePostSliceState = {
  seller: null,
  buyer: null,
  tradePost: null,
};

// DESC: slice 부분
export const tradePostSlice = createSlice({
  name: 'tradePost',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTradePost.fulfilled, (state, action) => {
      state.seller = action.payload.seller as TxUser;
      state.buyer = action.payload.buyer as TxUser;
      state.tradePost = action.payload as TradePostType;
    });
    // TODO: Response 데이터 확정 -> addCase 추가하기
  },
});

export const usersActions = tradePostSlice.actions;
export default tradePostSlice.reducer;
