import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { auth } from '../../api';
import { BASE_URL } from '../../constant';

export const getUUID = createAsyncThunk(
  'chat/getUUID',
  async (
    { accessToken, postId }: { accessToken: string; postId: number },
    { rejectWithValue },
  ) => {
    try {
      const res = await axios.get(`${BASE_URL}/chat/room/${postId}`, {
        headers: auth(accessToken),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

interface chatSliceState {
  roomUUID: string | null;
}
const initialState: chatSliceState = {
  roomUUID: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUUID.fulfilled, (state, action) => {
      state.roomUUID = action.payload.roomUUID;
    });
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
