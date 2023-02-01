import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { auth } from '../../api';
import { axiosI } from '../../api';
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
      const res = await axiosI.get<TradePostType>(`/tradepost/${postId}`, {
        headers: auth(accessToken),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getTop3 = createAsyncThunk(
  'tradePost/getTop3',
  async ({ accessToken }: { accessToken: string }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}/tradepost/top3`, {
        headers: auth(accessToken),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const createTradePost = createAsyncThunk(
  'tradePost/createTradePost',
  async (
    {
      accessToken,
      values,
      imgs,
    }: {
      accessToken: string;
      values: {
        title?: string;
        desc?: string;
        price?: string | null;
      };
      imgs?: string[];
    },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.post<TradePostType>(
        `${BASE_URL}/tradepost`,
        {
          title: values?.title,
          desc: values?.desc,
          price: Number(values?.price),
          imgUrls: imgs,
        },
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
      imgs,
    }: {
      postId?: number;
      accessToken: string;
      title?: string;
      desc?: string;
      price?: number;
      imgs?: string[];
    },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.patch<TradePostType>(
        `${BASE_URL}/tradepost/${postId}`,
        { title, desc, price, imgUrls: imgs },
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
      const res = await axios.get(
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
  candidates: any; // TODO: 타입 정보 수정
  tradeStatus: any; // TODO: 타입 정보 수정
  isLiked: boolean;
  time: Date | null;
  imageUrls: string[];
}
const initialState: tradePostSliceState = {
  seller: null,
  buyer: null,
  tradePost: null,
  candidates: [],
  tradeStatus: null,
  isLiked: false,
  time: null,
  imageUrls: [],
};

export const tradePostSlice = createSlice({
  name: 'tradePost',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTradePost.fulfilled, (state, action) => {
      state.imageUrls = action.payload.imageUrls;
      state.isLiked = action.payload.isLiked as boolean;
      state.seller = action.payload.seller as TxUser;
      state.buyer = action.payload.buyer as TxUser;
      state.tradePost = action.payload as TradePostType;
      state.tradeStatus = action.payload.tradeStatus;
    });
    builder.addCase(updateTradePost.fulfilled, (state, action) => {
      state.imageUrls = action.payload.imageUrls;
      state.isLiked = action.payload.isLiked as boolean;
      state.seller = action.payload.seller as TxUser;
      state.buyer = action.payload.buyer as TxUser;
      state.tradePost = action.payload as TradePostType;
      state.tradeStatus = action.payload.tradeStatus;
    });
    builder.addCase(createTradePost.fulfilled, (state, action) => {
      state.imageUrls = action.payload.imageUrls;
      state.isLiked = action.payload.isLiked as boolean;
      state.seller = action.payload.seller as TxUser;
      state.buyer = action.payload.buyer as TxUser;
      state.tradePost = action.payload as TradePostType;
      state.tradeStatus = action.payload.tradeStatus;
    });
    builder.addCase(deleteTradePost.fulfilled, (state, action) => {
      state.imageUrls = [];
      state.isLiked = false;
      state.seller = null;
      state.buyer = null;
      state.tradePost = null;
      state.tradeStatus = null;
    });
    builder.addCase(getReservation.fulfilled, (state, action) => {
      state.buyer = action.payload.buyer as TxUser;
      state.candidates = action.payload.candidates;
      state.tradeStatus = action.payload.tradeStatus;
    });
    builder.addCase(postReservation.fulfilled, (state, action) => {
      state.buyer = action.payload.buyer as TxUser;
      state.candidates = action.payload.candidates;
      state.tradeStatus = action.payload.tradeStatus;
    });
    builder.addCase(postConfirmation.fulfilled, (state, action) => {
      state.buyer = action.payload.buyer as TxUser;
      state.candidates = action.payload.candidates;
      state.tradeStatus = action.payload.tradeStatus;
    });
    builder.addCase(postLike.fulfilled, state => {
      state.isLiked = !state.isLiked;
    });
    builder.addCase(getTop3.fulfilled, (state, action) => {
      // console.log(action.payload);
    });
  },
});

export const tradePostActions = tradePostSlice.actions;
export default tradePostSlice.reducer;
