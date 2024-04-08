import { NameSpace } from '../../const';
import { CurrentOffer, OffersList } from '../../types/offer';
import { State } from '../../types/state';

export const getCurrentOffer = (state: Pick<State, NameSpace.Offer>): CurrentOffer | null => state[NameSpace.Offer].offer;
export const getNearOffers = (state: Pick<State, NameSpace.Offer>): OffersList => state[NameSpace.Offer].nearOffers;
export const getOfferDataLoadingStatus = (state: Pick<State, NameSpace.Offer>): boolean[] => state[NameSpace.Offer].isOfferDataLoading;
export const getErrorOfferLoadingStatus = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].hasErrorOfferLoading;
export const getErrorNearOffersLoadingStatus = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].hasErrorNearOffersLoading;
