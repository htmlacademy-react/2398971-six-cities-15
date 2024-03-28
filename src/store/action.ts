import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

//export const cityChange = createAction<Cities>('city/cityChange');
//export const offersContent = createAction('offers/offersContent');
//export const sortingChange = createAction<Sorting>('sorting/offersContent');

//export const loadOffers = createAction<OffersList>('data/loadOffers');
//export const loadOffer = createAction<CurrentOffer>('data/loadOffer');
//export const clearOffer = createAction<null>('data/clearOffer');
//export const loadNearOffer = createAction<OffersList>('data/loadNearOffer');
//export const clearNearOffer = createAction<null>('data/clearNearOffer');
//export const setCurrentOffers = createAction<OffersList>('data/setCurrentOffers');

//export const loadFavoriteOffers = createAction<OffersList>('data/loadFavoriteOffers');
//export const clearFavoriteOffers = createAction<null>('data/clearFavoriteOffers');
//export const switchFavoriteOffer = createAction<CurrentOffer>('data/switchFavoriteOffer');

//export const loadComments = createAction<Comments>('data/loadComments');
//export const clearComments = createAction<null>('data/clearComments');
//export const addComment = createAction<NewComment>('data/addComment');

//export const getUserName = createAction<string | null>('data/userLogin');
export const redirectToRoute = createAction<AppRoute>('route/redirectToRoute');
export const setErrorStatus = createAction<boolean>('data/setErrorStatus');
