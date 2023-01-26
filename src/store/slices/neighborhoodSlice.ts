import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { comment } from '../../types/neighborhood';

const initialState: Array<comment> = [] as comment[];

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, { payload }) => {
      //   console.log(payload);
      return (state = payload);
    },
    addComment: (state, { payload }) => {
      return [
        ...state,
        {
          comment: payload.comment,
          commentId: payload.commentId,
          commenter: payload.commenter,
          createdAt: payload.createdAt,
          isHidden: payload.isHidden,
          isOwner: payload.isOwner,
          modifiedAt: payload.modifiedAt,
        },
      ];
    },
  },
});

export const { setComments, addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
