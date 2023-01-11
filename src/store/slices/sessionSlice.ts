import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { BASE_URL } from '../../constant';
import { LoginInput } from '../../types/auth';

export const postLogin = createAsyncThunk(
  'users/postLogin',
  async ({ email, password }: LoginInput, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, {
        email: email,
        password: password,
      });
      return res.data;
    } catch (err) {
      // DESC: 컴포넌트쪽에서 에러처리할 수 있게 에러 export
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
  reducers: {
    // 비동기 아닌 부분
  },
  extraReducers: builder => {
    builder.addCase(postLogin.fulfilled, (state, action) => {
      // action.payload에 뭐 담겨오는지 확인하시고 맞게 적어주시면 될듯 합니다..!
      state.accessToken = action.payload;
    });
  },
});

export const sessionActions = sessionSlice.actions;
export default sessionSlice.reducer;
