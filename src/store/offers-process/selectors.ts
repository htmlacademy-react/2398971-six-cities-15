import { NameSpace } from '../../const';
import { Cities, OffersList, Sorting } from '../../types/offer';
import { State } from '../../types/state';

export const getCurrentCity = (state: State): Cities => state[NameSpace.Offers].city;
export const getOffers = (state: State): OffersList => state[NameSpace.Offers].offers;
export const getCurrentOffers = (state: State): OffersList => state[NameSpace.Offers].currentOffers;
export const getCurrentSorting = (state: State): Sorting => state[NameSpace.Offers].sorting;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
