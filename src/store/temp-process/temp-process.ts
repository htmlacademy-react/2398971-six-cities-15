import { getUserName, setErrorStatus } from '../action';
import { NameSpace } from '../../const';
import { fetchAllOfferAction, fetchCurrentOfferAction, fetchFavoriteOffersAction, fetchNearOffersAction, fetchNewCommentAction, fetchOfferCommentAction, fetchSetFavoriteOffer } from '../api-actions';
import { createSlice } from '@reduxjs/toolkit';

type InitalState = {
  email: string | null;
  errorStatus: boolean;
}

const initialState: InitalState = {
  email: null,
  errorStatus: false
};

export const TempProcess = createSlice({
  name: NameSpace.TEMP,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserName, (state, action) => {
        state.email = action.payload;
      })
      .addCase(setErrorStatus, (state, action) => {
        state.errorStatus = action.payload;
      })
      .addCase(fetchAllOfferAction.rejected, (state) => {
        state.errorStatus = true;
      })
      .addCase(fetchCurrentOfferAction.rejected, (state) => {
        state.errorStatus = true;
      })
      .addCase(fetchNearOffersAction.rejected, (state) => {
        state.errorStatus = true;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.errorStatus = true;
      })
      .addCase(fetchSetFavoriteOffer.rejected, (state) => {
        state.errorStatus = true;
      })
      .addCase(fetchOfferCommentAction.rejected, (state) => {
        state.errorStatus = true;
      })
      .addCase(fetchNewCommentAction.rejected, (state) => {
        state.errorStatus = true;
      })
      .addCase(fetchAllOfferAction.fulfilled, (state) => {
        state.errorStatus = false;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state) => {
        state.errorStatus = false;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state) => {
        state.errorStatus = false;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state) => {
        state.errorStatus = false;
      })
      .addCase(fetchSetFavoriteOffer.fulfilled, (state) => {
        state.errorStatus = false;
      })
      .addCase(fetchOfferCommentAction.fulfilled, (state) => {
        state.errorStatus = false;
      })
      .addCase(fetchNewCommentAction.fulfilled, (state) => {
        state.errorStatus = false;
      });
  }
});
