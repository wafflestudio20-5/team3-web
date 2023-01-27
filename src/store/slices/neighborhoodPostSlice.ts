import { createSlice } from '@reduxjs/toolkit';
import { neighborPost } from '../../types/neighborhood';

const initialState: neighborPost = {} as neighborPost;

export const neighborhoodPostSlice = createSlice({
  name: 'neighborhoodPost',
  initialState,
  reducers: {
    setPost: (state, { payload }) => {
      //   console.log(payload);
      return (state = payload);
    },
  },
});

export const { setPost } = neighborhoodPostSlice.actions;
export default neighborhoodPostSlice.reducer;
