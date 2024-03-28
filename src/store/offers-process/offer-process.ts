import { CITIES, NameSpace, SORTING } from '../../const';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchAllOfferAction } from '../api-actions';
import { OfferProcess } from '../../types/state';
import { Cities, Sorting } from '../../types/offer';

const initialState: OfferProcess = {
  city: CITIES[0],
  sorting: SORTING[0],
  offers: [],
  currentOffers: [],
  isOffersDataLoading: false,
};

export const offerProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    cityChange: (state, action: PayloadAction<Cities>) => {
      state.city = action.payload;
      state.currentOffers = state.offers.filter((offer) => offer.city.name === state.city.name);
    },
    sortingChange: (state, action: PayloadAction<Sorting>) => {
      state.sorting = action.payload;
    },
    setCurrentOffers: (state) => {
      state.currentOffers = state.offers.filter((offer) => offer.city.name === state.city.name);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchAllOfferAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.currentOffers = state.offers.filter((offer) => offer.city.name === state.city.name);
      });
  }
});

export const { cityChange, sortingChange, setCurrentOffers } = offerProcess.actions;
