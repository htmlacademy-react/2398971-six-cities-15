import { createAction } from '@reduxjs/toolkit';
import { Cities, Sorting, OffersList } from '../types/offer';
import { AppRoute, AuthorizationStatus } from '../const';

export const cityChange = createAction<Cities>('city/cityChange');
export const offersContent = createAction('offers/offersContent');
export const sortingChange = createAction<Sorting>('sorting/offersContent');
export const loadOffers = createAction<OffersList>('data/loadOffers');
export const setCurrentOffers = createAction<OffersList>('data/setCurrentOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const getUserName = createAction<string | null >('data/userLogin');
export const redirectToRoute = createAction<AppRoute>('route/redirectToRoute');
