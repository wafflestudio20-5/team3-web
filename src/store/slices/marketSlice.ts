import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { auth } from '../../api';
import { axiosI } from '../../api';
import { BASE_URL } from '../../constant';
import { TradePostResponse } from '../../types/market';

export const getTradePostList = createAsyncThunk(
  'tradePost/getTradePostList',
  async (
    {
      accessToken,
      keyword,
      isTrading,
      page,
      limit,
    }: {
      accessToken: string;
      keyword: string;
      page: number;
      limit: number;
      isTrading: boolean;
    },
    { rejectWithValue },
  ) => {
    try {
      const res = await axiosI.get<TradePostResponse>(
        `/tradepost?keyword=${keyword}&page=${page}&limit=${limit}&isTrading=${isTrading}`,
        { headers: auth(accessToken) },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
