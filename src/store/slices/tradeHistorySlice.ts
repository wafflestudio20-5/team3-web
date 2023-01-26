import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from '../../api';
import { BASE_URL } from '../../constant';

export const getBuyHistory = createAsyncThunk(
  'users/getBuyHistory',
  async (accessToken: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}/users/buy-trade`, {
        headers: auth(accessToken),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getSellHistory = createAsyncThunk(
  'users/getSellHistory',
  async (
    { accessToken, userId }: { accessToken: string; userId: number },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.get(`${BASE_URL}/users/${userId}/sell-trade`, {
        headers: auth(accessToken),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getLikeHistory = createAsyncThunk(
  'users/getLikeHistory',
  async (accessToken: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}/users/like-trade`, {
        headers: auth(accessToken),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
