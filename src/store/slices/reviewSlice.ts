import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { auth } from '../../api';
import { BASE_URL } from '../../constant';

export const postReview = createAsyncThunk(
  'tradePost/postReview',
  async (
    {
      accessToken,
      postId,
      score,
      content,
    }: { accessToken: string; postId: number; score: number; content: string },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.post(
        `${BASE_URL}:81/tradepost/${postId}/review`,
        { score: score, content: content },
        { headers: auth(accessToken) },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getReviews = createAsyncThunk(
  'tradePost/getReview',
  async (userId: number, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}:81/users/${userId}/reviews`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (
    { accessToken, reviewId }: { accessToken: string; reviewId: number },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.delete(`${BASE_URL}/reviews/${reviewId}`, {
        headers: auth(accessToken),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
