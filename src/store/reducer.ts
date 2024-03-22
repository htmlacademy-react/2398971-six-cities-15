import {createReducer} from '@reduxjs/toolkit';
import { cityChange, loadOffers, offersContent, sortingChange, setError, setOffersDataLoadingStatus, setCurrentOffers } from './action';
import { CITIES, SORTING } from '../const';
import { Cities, OffersList, Sorting } from '../types/offer';

type InitalState = {
  city: Cities;
  sorting: Sorting;
  offers: OffersList;
  currentOffers: OffersList;
  isOffersDataLoading: boolean;
  error: string | null;
}

const initialState: InitalState = {
  city: CITIES[0],
  sorting: SORTING[0],
  offers: [],
  currentOffers: [],
  isOffersDataLoading: false,
  error: null,
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
