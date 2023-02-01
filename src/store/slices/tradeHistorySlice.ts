import axios from 'axios';
import { axiosI } from '../../api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from '../../api';
import { BASE_URL } from '../../constant';

export const getBuyHistory = createAsyncThunk(
  'users/getBuyHistory',
  async (accessToken: string, { rejectWithValue }) => {
    try {
      const res = await axiosI.get(`/users/buy-trade`, {
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
      const res = await axiosI.get(`/users/${userId}/sell-trade`, {
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
      const res = await axiosI.get(`/users/like-trade`, {
        headers: auth(accessToken),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
