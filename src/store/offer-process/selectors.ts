import { NameSpace } from '../../const';
import { CurrentOffer, OffersList } from '../../types/offer';
import { State } from '../../types/state';

export const getCurrentOffer = (state: State): CurrentOffer | null => state[NameSpace.Offer].offer;
export const getNearOffers = (state: State): OffersList => state[NameSpace.Offer].nearOffers;
export const getOfferDataLoadingStatus = (state: State): boolean[] => state[NameSpace.Offer].isOfferDataLoading;
export const getErrorOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offer].hasErrorOfferLoading;
export const getErrorNearOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offer].hasErrorNearOffersLoading;
