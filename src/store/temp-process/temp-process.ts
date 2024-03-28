import { setOffersDataLoadingStatus, getUserName, loadOffer, loadNearOffer, loadFavoriteOffers, loadComments, clearOffer, clearNearOffer, clearComments, setErrorStatus, clearFavoriteOffers } from '../action';
import { NameSpace } from '../../const';
import { Comments, CurrentOffer, OffersList } from '../../types/offer';
import { fetchAllOfferAction, fetchCurrentOfferAction, fetchFavoriteOffersAction, fetchNearOffersAction, fetchNewCommentAction, fetchOfferCommentAction, fetchSwitchFavoriteOffer } from '../api-actions';
import { createSlice } from '@reduxjs/toolkit';

type InitalState = {
  isOffersDataLoading: boolean;
  email: string | null;
  offer: CurrentOffer | null;
  nearOffers: OffersList | null;
  favoriteOffers: OffersList | null;
  comments: Comments | null;
  errorStatus: boolean;
}

const initialState: InitalState = {
  isOffersDataLoading: false,
  email: null,
  offer: null,
  nearOffers: [],
  favoriteOffers: null,
  comments: [],
  errorStatus: false
};

export const TempProcess = createSlice({
  name: NameSpace.TEMP,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOffer, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(clearOffer, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(loadNearOffer, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(clearNearOffer, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(loadFavoriteOffers, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(clearFavoriteOffers, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(loadComments, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(clearComments, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(setOffersDataLoadingStatus, (state, action) => {
        state.isOffersDataLoading = action.payload;
      })
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
      .addCase(fetchSwitchFavoriteOffer.rejected, (state) => {
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
      .addCase(fetchSwitchFavoriteOffer.fulfilled, (state) => {
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
