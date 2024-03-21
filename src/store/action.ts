import { createAction } from '@reduxjs/toolkit';
import { Cities, Sorting, OffersList } from '../types/offer';

export const cityChange = createAction<Cities>('city/cityChange');
export const offersContent = createAction('offers/offersContent');
export const sortingChange = createAction<Sorting>('sorting/offersContent');
export const loadOffers = createAction<OffersList>('data/loadOffers');
export const setCurrentOffers = createAction<OffersList>('data/setCurrentOffers');
export const setError = createAction<string | null>('error/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
