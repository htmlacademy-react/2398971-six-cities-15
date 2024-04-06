import { NameSpace } from '../../const';
import { OffersList } from '../../types/offer';
import { State } from '../../types/state';

export const getFavoriteOffers = (state: Pick<State, NameSpace.Favorites>): OffersList => state[NameSpace.Favorites].favoriteOffers;
export const getFavoriteOffersDataLoadingStatus = (state: Pick<State, NameSpace.Favorites>): boolean => state[NameSpace.Favorites].isFavoriteOffersDataLoading;
export const getSetFavoriteOffersDataSendingStatus = (state: Pick<State, NameSpace.Favorites>): boolean => state[NameSpace.Favorites].isSetFavoriteOffersDataSending;
export const getErrorFavoriteOffersLoadingStatus = (state: Pick<State, NameSpace.Favorites>): boolean => state[NameSpace.Favorites].hasErrorFavoriteOffersLoading;
export const getErrorFavoriteOfferSendingStatus = (state: Pick<State, NameSpace.Favorites>): boolean => state[NameSpace.Favorites].hasErrorFavoriteOfferSending;
