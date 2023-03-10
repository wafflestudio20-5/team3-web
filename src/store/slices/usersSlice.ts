import axios from 'axios';
import { axiosI } from '../../api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { auth } from '../../api';
import { User } from '../../types/users';
import { BASE_URL } from '../../constant';

export const getMe = createAsyncThunk(
  'users/getMe',
  async (token: string | null, { rejectWithValue }) => {
    try {
      const res = await axiosI.get<User>(`/users/me`, {
        headers: auth(token),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getMyChats = createAsyncThunk(
  'users/getMyChats',
  async (token: string, { rejectWithValue }) => {
    try {
      const res = await axiosI.get(`/users/chats`, {
        headers: auth(token),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getUser = createAsyncThunk(
  'users/getUser',
  async (userId: number, { rejectWithValue }) => {
    try {
      const res = await axiosI.get<User>(`/users/${userId}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const postLocation = createAsyncThunk(
  'users/postLocation',
  async (
    {
      accessToken,
      currLocation,
      coordinate,
    }: {
      accessToken: string;
      currLocation: string | null;
      coordinate: { lat: number; lng: number };
    },
    { rejectWithValue },
  ) => {
    try {
      const res = await axiosI.patch<User>(
        `/users/me/location`,
        {
          location: currLocation,
          coordinate,
        },
        { headers: auth(accessToken) },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const postUsername = createAsyncThunk(
  'users/postUsername',
  async (
    {
      accessToken,
      currUsername,
    }: { accessToken: string; currUsername: string | null },
    { rejectWithValue },
  ) => {
    try {
      const res = await axiosI.patch<User>(
        `/users/me/username`,
        {
          username: currUsername,
        },
        { headers: auth(accessToken) },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const postPassword = createAsyncThunk(
  'users/postPassword',
  async (
    {
      accessToken,
      values,
    }: {
      accessToken: string;
      values: { pw: string; newPw: string; newPwConfirm: string };
    },
    { rejectWithValue },
  ) => {
    try {
      const res = await axiosI.patch<User>(
        `/users/me/password`,
        {
          password: values.pw,
          newPassword: values.newPw,
          newPasswordConfirm: values.newPwConfirm,
        },
        { headers: auth(accessToken) },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const postImg = createAsyncThunk(
  'users/postImg',
  async (
    {
      accessToken,
      formData,
    }: {
      accessToken: string;
      formData: any;
    },
    { rejectWithValue },
  ) => {
    try {
      const res = await axiosI.patch(`/users/me/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

interface usersSliceState {
  me: User | null;
  currentUser: User | null;
}

const initialState: usersSliceState = {
  me: null,
  currentUser: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.me = action.payload as User;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.currentUser = action.payload as User;
    });
    builder.addCase(getMyChats.fulfilled, (state, action) => {
      // TODO
      // console.log(action.payload);
    });
    builder.addCase(postLocation.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(postUsername.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(postImg.fulfilled, (state, action) => {
      if (state.me) {
        state.me.imgUrl = action.payload;
      }
    });
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
