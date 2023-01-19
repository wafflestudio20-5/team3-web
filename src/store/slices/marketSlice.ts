import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { auth } from '../../api';
import { BASE_URL } from '../../constant';
import { TradePostResponse } from '../../types/market';

export const getTradePostList = createAsyncThunk(
  'tradePost/getTradePostList',
  async (
    {
      accessToken,
      keyword,
      page,
      limit,
    }: { accessToken: string; keyword: string; page: number; limit: number },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.get<TradePostResponse>(
        `${BASE_URL}/tradepost?keyword=${keyword}&page=${page}&limit=${limit}`,
        { headers: auth(accessToken) },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
