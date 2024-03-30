import { NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { OfferProcess } from '../../types/state';
import { fetchCurrentOfferAction, fetchNearOffersAction, fetchSetFavoriteOffer } from '../api-actions';

const initialState: OfferProcess = {
  offer: null,
  nearOffers: [],
  isOfferDataLoading: [true, true],
  hasErrorOfferLoading: false,
  hasErrorNearOffersLoading: false,
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
        state.hasErrorOfferLoading = false;
      })
      .addCase(fetchNearOffersAction.pending, (state) => {
        state.isOfferDataLoading[1] = true;
        state.hasErrorNearOffersLoading = false;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferDataLoading[0] = false;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
        state.isOfferDataLoading[1] = false;
      })
      .addCase(fetchCurrentOfferAction.rejected, (state) => {
        state.isOfferDataLoading[0] = false;
        state.hasErrorOfferLoading = true;
      })
      .addCase(fetchNearOffersAction.rejected, (state) => {
        state.isOfferDataLoading[1] = false;
        state.hasErrorNearOffersLoading = true;
      })
      .addCase(fetchSetFavoriteOffer.fulfilled, (state, action) => {
        if(state.offer !== null) {
          state.offer = {
            id: state.offer.id,
            title: state.offer.title,
            type: state.offer.type,
            price: state.offer.price,
            city: state.offer.city,
            location: state.offer.location,
            isFavorite: action.payload.isFavorite,
            isPremium: state.offer.isPremium,
            rating: state.offer.rating,
            description: state.offer.description,
            images: state.offer.images,
            goods: state.offer.goods,
            host: state.offer.host,
            bedrooms: state.offer.bedrooms,
            maxAdults: state.offer.maxAdults,
          };
        }
      });
  }
});

export const { clearOffer } = offerProcess.actions;
