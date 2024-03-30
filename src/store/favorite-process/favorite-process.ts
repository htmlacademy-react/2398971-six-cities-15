import { NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { FavoriteProcess } from '../../types/state';
import { fetchFavoriteOffersAction, fetchSetFavoriteOffer } from '../api-actions';

const initialState: FavoriteProcess = {
  favoriteOffers: [],
  isSetFavoriteOffersDataSending: false,
  isFavoriteOffersDataLoading: true,
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
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersDataLoading = false;
      })
      .addCase(fetchSetFavoriteOffer.pending, (state) => {
        state.isSetFavoriteOffersDataSending = true;
      })
      .addCase(fetchSetFavoriteOffer.fulfilled, (state, action) => {
        state.favoriteOffers = state.favoriteOffers.map((offer) => {
          if (offer.id === action.payload.id) {
            return {
              id: offer.id,
              title: offer.title,
              type: offer.type,
              price: offer.price,
              city: offer.city,
              location: offer.location,
              isFavorite: action.payload.isFavorite,
              isPremium: offer.isPremium,
              rating: offer.rating,
              previewImage: offer.previewImage,
            };
          }
          return offer;
        });
        state.isSetFavoriteOffersDataSending = false;
      });
  }
});

export const { clearFavoriteOffers } = favoriteProcess.actions;
