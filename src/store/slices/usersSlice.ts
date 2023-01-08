import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { auth } from '../../api';
import { User } from '../../types/users';
import { BASE_URL } from '../../constant';

type SliceState = {
  me: User | null;
  currenrUser: User | null;
};

const initialState: SliceState = {
  me: null,
  currenrUser: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMe.fulfilled, (state, { payload: me }) => {
      state.me = me as User;
    });
  },
});

export const fetchMe = createAsyncThunk(
  'users/getMe',
  async (token: string) => {
    try {
      const res = await axios.get<User>(`${BASE_URL}/users/me`, {
        headers: auth(token),
      });
      return res.data;
    } catch (err) {
      return err;
    }
  },
);

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
