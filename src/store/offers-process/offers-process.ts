import { CITIES, NameSpace, SORTING } from '../../const';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchAllOfferAction, fetchSetFavoriteOffer } from '../api-actions';
import { OffersProcess } from '../../types/state';
import { Cities, Sorting } from '../../types/offer';

const initialState: OffersProcess = {
  city: CITIES[0],
  sorting: SORTING[0],
  offers: [],
  currentOffers: [],
  isOffersDataLoading: false,
};

export const offersProcess = createSlice({
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
        state.isOffersDataLoading = false;
        state.currentOffers = state.offers.filter((offer) => offer.city.name === state.city.name);
      })
      .addCase(fetchSetFavoriteOffer.fulfilled, (state, action) => {
        state.offers = state.offers.map((offer) => {
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
      });
  }
});

export const { cityChange, sortingChange, setCurrentOffers } = offersProcess.actions;
