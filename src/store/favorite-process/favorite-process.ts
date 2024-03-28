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
        state.isFavoriteOffersDataLoading = true;
      })
      .addCase(fetchSetFavoriteOffer.fulfilled, (state) => {
        state.isFavoriteOffersDataLoading = false;
      });
  }
});

export const { clearFavoriteOffers } = favoriteProcess.actions;
