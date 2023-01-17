import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { BASE_URL } from '../../constant';
import { LoginInput } from '../../types/auth';
import { saveItem } from '../../utils/storage';

export const postLogin = createAsyncThunk(
  'session/postLogin',
  async ({ email, password }: LoginInput, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, {
        email: email,
        password: password,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const postRefresh = createAsyncThunk(
  'session/postRefresh',
  async (refreshToken: string, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/refresh`, {
        refreshToken,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

interface sessionSliceState {
  accessToken: string | null;
}

const initialState: sessionSliceState = {
  accessToken: null,
};

// DESC: slice 부분
export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      saveItem('refreshToken', action.payload.refreshToken);
    });
    builder.addCase(postRefresh.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      saveItem('refreshToken', action.payload.refreshToken);
    });
  },
});

export const sessionActions = sessionSlice.actions;
export default sessionSlice.reducer;
