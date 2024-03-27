import {createReducer} from '@reduxjs/toolkit';
import { cityChange, loadOffers, offersContent, sortingChange, setOffersDataLoadingStatus, setCurrentOffers, requireAuthorization, getUserName, loadOffer, loadNearOffer, loadFavoriteOffers, loadComments, clearOffer, clearNearOffer, clearComments, setErrorStatus, clearFavoriteOffers } from './action';
import { AuthorizationStatus, CITIES, SORTING } from '../const';
import { Cities, Comments, CurrentOffer, OffersList, Sorting } from '../types/offer';
import { checkAuthAction, fetchAllOfferAction, fetchCurrentOfferAction, fetchFavoriteOffersAction, fetchNearOffersAction, fetchNewCommentAction, fetchOfferCommentAction, fetchSwitchFavoriteOffer, loginAction, logoutAction } from './api-actions';

type InitalState = {
  city: Cities;
  sorting: Sorting;
  offers: OffersList;
  currentOffers: OffersList;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  email: string | null;
  offer: CurrentOffer | null;
  nearOffers: OffersList | null;
  favoriteOffers: OffersList | null;
  comments: Comments | null;
  errorStatus: boolean;
}

const initialState: InitalState = {
  city: CITIES[0],
  sorting: SORTING[0],
  offers: [],
  currentOffers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  email: null,
  offer: null,
  nearOffers: [],
  favoriteOffers: null,
  comments: [],
  errorStatus: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
      state.currentOffers = state.offers.filter((offer) => offer.city.name === action.payload.name);
    })
    .addCase(offersContent, (state) => {
      state.offers.push();
    })
    .addCase(sortingChange, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
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
    .addCase(setCurrentOffers, (state) => {
      state.currentOffers = state.offers.filter((offer) => offer.city.name === state.city.name);
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
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
    .addCase(checkAuthAction.rejected, (state) => {
      state.errorStatus = true;
    })
    .addCase(loginAction.rejected, (state) => {
      state.errorStatus = true;
    })
    .addCase(logoutAction.rejected, (state) => {
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
    })
    .addCase(checkAuthAction.fulfilled, (state) => {
      state.errorStatus = false;
    })
    .addCase(loginAction.fulfilled, (state) => {
      state.errorStatus = false;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.errorStatus = false;
    });
});

export {reducer};
