import {createReducer} from '@reduxjs/toolkit';
import { cityChange, loadOffers, offersContent, sortingChange, setOffersDataLoadingStatus, setCurrentOffers, requireAuthorization, getUserName } from './action';
import { AuthorizationStatus, CITIES, SORTING } from '../const';
import { Cities, OffersList, Sorting } from '../types/offer';

type InitalState = {
  city: Cities;
  sorting: Sorting;
  offers: OffersList;
  currentOffers: OffersList;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  email: string | null;
}

const initialState: InitalState = {
  city: CITIES[0],
  sorting: SORTING[0],
  offers: [],
  currentOffers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  email: null,
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
    .addCase(setCurrentOffers, (state) => {
      state.currentOffers = state.offers.filter((offer) => offer.city.name === state.city.name);
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserName, (state, action) => {
      state.email = action.payload;
    });
});

export {reducer};
