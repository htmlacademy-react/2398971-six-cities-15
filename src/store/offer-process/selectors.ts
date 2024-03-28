import { NameSpace } from '../../const';
import { Comments, CurrentOffer, OffersList } from '../../types/offer';
import { State } from '../../types/state';

export const getCurrentOffer = (state: State): CurrentOffer | null => state[NameSpace.Offer].offer;
export const getNearOffers = (state: State): OffersList | null => state[NameSpace.Offer].nearOffers;
export const getComments = (state: State): Comments | null => state[NameSpace.Offer].comments;
export const getOfferDataLoadingStatus = (state: State): boolean[] => state[NameSpace.Offer].isOfferDataLoading;
