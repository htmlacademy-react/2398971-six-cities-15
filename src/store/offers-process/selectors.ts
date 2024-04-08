import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Cities, OffersList, Sorting } from '../../types/offer';
import { State } from '../../types/state';

export const getCurrentCity = (state: Pick<State, NameSpace.Offers>): Cities => state[NameSpace.Offers].city;
export const getOffers = (state: Pick<State, NameSpace.Offers>): OffersList => state[NameSpace.Offers].offers;
export const getCurrentSorting = (state: Pick<State, NameSpace.Offers>): Sorting => state[NameSpace.Offers].sorting;
export const getOffersDataLoadingStatus = (state: Pick<State, NameSpace.Offers>): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getErrorOffersLoadingStatus = (state: Pick<State, NameSpace.Offers>): boolean => state[NameSpace.Offers].hasErrorOffersLoading;

export const getCurrentOffers = createSelector(
  [getCurrentCity, getOffers],
  (city, offers) => offers.filter((offer) => offer.city.name === city.name)
);
