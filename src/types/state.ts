import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { Cities, Comments, CurrentOffer, OffersList, Sorting } from './offer.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type OffersProcess = {
  city: Cities;
  sorting: Sorting;
  offers: OffersList;
  currentOffers: OffersList;
  isOffersDataLoading: boolean;
}

export type OfferProcess = {
  offer: CurrentOffer | null;
  nearOffers: OffersList;
  isOfferDataLoading: boolean[];
}

export type FavoriteProcess = {
  favoriteOffers: OffersList;
  isSetFavoriteOffersDataSending: boolean;
  isFavoriteOffersDataLoading: boolean;
}

export type CommentProcess = {
  comments: Comments;
  isSendNewCommentDataLoading: boolean;
  isCommentsDataLoading: boolean;
}


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
