import { NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { OfferProcess } from '../../types/state';
import { fetchCurrentOfferAction, fetchNearOffersAction } from '../api-actions';

const initialState: OfferProcess = {
  offer: null,
  nearOffers: [],
  isOfferDataLoading: [true, true],
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    clearOffer: (state) => {
      state.offer = null;
      state.nearOffers = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isOfferDataLoading[0] = true;
      })
      .addCase(fetchNearOffersAction.pending, (state) => {
        state.isOfferDataLoading[1] = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferDataLoading[0] = false;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
        state.isOfferDataLoading[1] = false;
      });
  }
});

export const { clearOffer } = offerProcess.actions;
