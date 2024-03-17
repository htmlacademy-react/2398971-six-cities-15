import {createReducer} from '@reduxjs/toolkit';
import { cityChange, offersContent } from './action';
import { offersList } from '../mock/offers';
import { CITIES } from '../const';

const initialState = {
  city: CITIES[0],
  offers: offersList,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {

      state.city = action.payload.city;
    })
    .addCase(offersContent, (state) => {
      state.offers.push();
    });
});

export {reducer};
