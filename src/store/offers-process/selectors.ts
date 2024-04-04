import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Cities, OffersList, Sorting } from '../../types/offer';
import { State } from '../../types/state';

export const getCurrentCity = (state: State): Cities => state[NameSpace.Offers].city;
export const getOffers = (state: State): OffersList => state[NameSpace.Offers].offers;
export const getCurrentSorting = (state: State): Sorting => state[NameSpace.Offers].sorting;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getErrorOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].hasErrorOffersLoading;

export const getCurrentOffers = createSelector(
  [getCurrentCity, getOffers],
  (city, offers) => offers.filter((offer) => offer.city.name === city.name)
);
