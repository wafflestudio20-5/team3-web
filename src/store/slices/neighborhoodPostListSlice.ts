import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { auth } from '../../api';
import { BASE_URL } from '../../constant';
import { neighborPost } from '../../types/neighborhood';

// export const getNeighborhoodPostList = createAsyncThunk(
//   'neighborhoodPost/getNeighborhoodPostList',
//   async (
//     {
//       accessToken,
//       keyword,
//       page,
//     }: { accessToken: string; keyword: string; page: number },
//     { rejectWithValue },
//   ) => {
//     try {
//       const res = await axios.get<Array<neighborPost>>(
//         `${BASE_URL}/neighborhood/?page=${page}`,
//         { headers: auth(accessToken) },
//       );
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   },
// );

const initialState: neighborPost[] = [] as neighborPost[];

export const neighborhoodPostListSlice = createSlice({
  name: 'neighborhoodPostList',
  initialState,
  reducers: {
    setPosts: (state, { payload }) => {
      //   console.log(payload);
      return (state = payload);
    },
  },
});

export const { setPosts } = neighborhoodPostListSlice.actions;
export default neighborhoodPostListSlice.reducer;
