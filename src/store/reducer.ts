import {createReducer} from '@reduxjs/toolkit';
import { cityChange, offersContent, sortingChange } from './action';

import { CITIES, SORTING } from '../const';
import { offersList } from '../mock/offers';

const initialState = {
  city: CITIES[0],
  sorting: SORTING[0],
  offers: offersList,
  currentOffers: offersList.filter((offer) => offer.city.name === CITIES[0].name),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload.city;
      state.currentOffers = state.offers.filter((offer) => offer.city.name === action.payload.city.name);
    })
    .addCase(offersContent, (state) => {
      state.offers.push();
    })
    .addCase(sortingChange, (state, action) => {
      state.sorting = action.payload.sorting;
    });
});

export {reducer};
