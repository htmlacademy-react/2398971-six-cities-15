import { NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { FavoriteProcess } from '../../types/state';
import { fetchFavoriteOffersAction, fetchSetFavoriteOffer } from '../api-actions';

const initialState: FavoriteProcess = {
  favoriteOffers: [],
  isSetFavoriteOffersDataSending: false,
  isFavoriteOffersDataLoading: true,
  hasErrorFavoriteOffersLoading: false,
  hasErrorFavoriteOfferSending: false,
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    clearFavoriteOffers: (state) => {
      state.favoriteOffers = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoriteOffersDataLoading = true;
        state.hasErrorFavoriteOffersLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersDataLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isFavoriteOffersDataLoading = false;
        state.hasErrorFavoriteOffersLoading = true;
      })
      .addCase(fetchSetFavoriteOffer.pending, (state) => {
        state.isSetFavoriteOffersDataSending = true;
        state.hasErrorFavoriteOfferSending = false;
      })
      .addCase(fetchSetFavoriteOffer.fulfilled, (state, action) => {
        const offerIndex = state.favoriteOffers.findIndex((offer) => offer.id === action.payload.id);
        if (offerIndex === -1) {
          state.favoriteOffers.push(
            {
              id: action.payload.id,
              title: action.payload.title,
              type: action.payload.type,
              price: action.payload.price,
              city: action.payload.city,
              location: action.payload.location,
              isFavorite: action.payload.isFavorite,
              isPremium: action.payload.isPremium,
              rating: action.payload.rating,
              previewImage: action.payload.images[0],
            }
          );
        } else {
          state.favoriteOffers.splice(offerIndex, 1);
        }
        state.isSetFavoriteOffersDataSending = false;
      })
      .addCase(fetchSetFavoriteOffer.rejected, (state) => {
        state.isSetFavoriteOffersDataSending = false;
        state.hasErrorFavoriteOfferSending = true;
      });
  }
});

export const { clearFavoriteOffers } = favoriteProcess.actions;
