import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { auth } from '../../api';
import { User } from '../../types/users';
import { BASE_URL } from '../../constant';

export const getMe = createAsyncThunk(
  'users/getMe',
  async (token: string, { rejectWithValue }) => {
    try {
      const res = await axios.get<User>(`${BASE_URL}/users/me`, {
        headers: auth(token),
      });
      return res.data;
    } catch (err) {
      // DESC: 컴포넌트쪽에서 에러처리할 수 있게 에러 export
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
    }: { accessToken: string; currLocation: string | null },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.patch<User>(
        // TODO: API 분리시 요청 수정
        `${BASE_URL}/users/me`,
        {
          location: currLocation,
          imgUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUUpKQJH9FMYS68t64Zs4COpToFcDC8nYUQ&usqp=CAU',
          username: 'yeji',
        },
        { headers: auth(accessToken) },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// TODO: postUsername API

// TODO: postImgFile API

// TODO: postPassword API

// DESC: slice 초기값과 타입
interface usersSliceState {
  me: User | null;
  currentUser: User | null;
}
const initialState: usersSliceState = {
  me: null,
  currentUser: null,
};

// DESC: slice 부분
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.me = action.payload as User;
    });
    builder.addCase(postLocation.fulfilled, (state, action) => {
      state.me = action.payload as User;
    });
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
