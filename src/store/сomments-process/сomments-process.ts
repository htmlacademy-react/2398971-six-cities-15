import { NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { CommentProcess } from '../../types/state';
import { fetchNewCommentAction, fetchOfferCommentAction } from '../api-actions';

const initialState: CommentProcess = {
  comments: [],
  isSendNewCommentDataLoading: false,
  isCommentsDataLoading: true,
};

export const commentsProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    clearComments: (state) => {
      state.comments = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferCommentAction.pending, (state) => {
        state.isCommentsDataLoading = true;
      })
      .addCase(fetchOfferCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsDataLoading = false;
      })
      .addCase(fetchNewCommentAction.pending, (state) => {
        state.isSendNewCommentDataLoading = true;
      })
      .addCase(fetchNewCommentAction.rejected, (state) => {
        state.isSendNewCommentDataLoading = false;
      })
      .addCase(fetchNewCommentAction.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.isSendNewCommentDataLoading = false;
      });
  }
});

export const { clearComments } = commentsProcess.actions;
