import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { Cities, OffersList, Sorting } from './offer.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type OfferProcess = {
  city: Cities;
  sorting: Sorting;
  offers: OffersList;
  currentOffers: OffersList;
  isOffersDataLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
