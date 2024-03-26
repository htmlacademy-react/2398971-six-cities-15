import {createReducer} from '@reduxjs/toolkit';
import { cityChange, loadOffers, offersContent, sortingChange, setOffersDataLoadingStatus, setCurrentOffers, requireAuthorization, getUserName, loadOffer, loadNearOffer, loadFavoriteOffers, loadComments, clearOffer, clearNearOffer, clearComments, setErrorStatus } from './action';
import { AuthorizationStatus, CITIES, SORTING } from '../const';
import { Cities, Comments, CurrentOffer, OffersList, Sorting } from '../types/offer';

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
  favoriteOffers: [],
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
    });
});

export {reducer};
