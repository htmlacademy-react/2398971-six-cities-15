import { NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { CommentProcess } from '../../types/state';
import { fetchNewCommentAction, fetchOfferCommentAction } from '../api-actions';

const initialState: CommentProcess = {
  comments: [],
  isSendNewCommentDataLoading: false,
  isCommentsDataLoading: true,
  hasErrorCommentLoading: false,
  hasErrorCommentSending: false,
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
        state.hasErrorCommentLoading = false;
      })
      .addCase(fetchOfferCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentsDataLoading = false;
      })
      .addCase(fetchOfferCommentAction.rejected, (state) => {
        state.isCommentsDataLoading = false;
        state.hasErrorCommentLoading = true;
      })
      .addCase(fetchNewCommentAction.pending, (state) => {
        state.isSendNewCommentDataLoading = true;
        state.hasErrorCommentSending = false;
      })
      .addCase(fetchNewCommentAction.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.isSendNewCommentDataLoading = false;
      })
      .addCase(fetchNewCommentAction.rejected, (state) => {
        state.isSendNewCommentDataLoading = false;
        state.hasErrorCommentSending = true;
      });
  }
});

export const { clearComments } = commentsProcess.actions;
